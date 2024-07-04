import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

const ConsultStudent = () => {
    

    const [id, setId] = useState('');
    const [alumnos, setAlumnos] = useState<Array<string>>([]);

    const fetchAlumno = async () => {
        try {
            const response = await fetch(`http://localhost:5000/${id}`);
            if (!response.ok) {
                throw new Error('Error al obtener datos del alumno');
            }
            const data = await response.json();
            setAlumnos(Array.isArray(data) ? data : [data]);
        } catch (error) {
            console.log("Error")
        }
    };

    const handleCodigoEstudianteChange = (event:any) => {
        const { value } = event.target;
        setId(value);
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            // Realizar la comparación del ID con el ID de la base de datos
            if (id.trim() !== '') {
                fetchAlumno();
            } else {
                console.log("Ingrese ID correcto")
            }
        } catch (error) {
            console.log("Error")
        }
        
    };

        return {
            alumnos,
            handleCodigoEstudianteChange,
            handleSubmit
        }
}

export default ConsultStudent;