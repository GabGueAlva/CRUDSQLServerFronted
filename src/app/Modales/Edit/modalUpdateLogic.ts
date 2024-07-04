import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify";

type Inputs = {
    id: number 
    nombre: string
    apellido: string
    email: string
    curso_id: number
}

const EditStudent = () => {

   
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();

    const [id, setId] = useState('');
    const [alumnos, setAlumnos] = useState<Array<string>>([]);

    const [idFound, setIdFound] = useState(false);


    const fetchAlumno = async () => {
        try {
            const response = await fetch(`http://localhost:5000/${id}`);
            if (!response.ok) {
                throw new Error('Error al obtener datos del alumno');
            }
            const result = await response.json();
            setAlumnos(Array.isArray(result) ? result : [result]);
            console.log(id)
        } catch (error) {
            setIdFound(false)
            console.log(idFound)
        }
    };


    const handleCodigoEstudianteChange = (event:any) => {
        const { value } = event.target;
        setId(value);
    };

    const handleConsulta = async (e:any) => {
        e.preventDefault();
        try {
            // Realizar la comparación del ID con el ID de la base de datos
            if (id.trim() !== '') {
                fetchAlumno();
                setIdFound(true)
            } else {
                console.log("Ingrese ID correcto")
            }
        } catch (error) {
            setIdFound(false)
            console.log(idFound)
        }
        
    };

    const onSubmit = async (data: Inputs) => {
        if (idFound){
            try {
                const response = await fetch(`http://localhost:5000/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (!response.ok) {
                    throw new Error('Error al crear el alumno');
                }
                toast.success('Alumno modificado con éxito'); // Mostrar notificación de éxito
                console.log('Alumno creado con éxito');
                setValue("email", "")
                setValue("apellido", "")
                setValue("nombre", "")
                setValue("curso_id", 0)
            } catch (error) {
                console.error('Error:', error);
                toast.error('Error al crear datos.');
            }
        }
    };



        return {
            alumnos,
            handleCodigoEstudianteChange,
            handleConsulta,
            register,
            formState: { errors },
            handleSubmit,
            onSubmit,
            idFound
        }
}

export default EditStudent;