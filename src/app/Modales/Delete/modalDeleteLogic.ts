import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify";

const DeleteStudent = () => {

    const [id, setId] = useState('');
    const [alumnos, setAlumnos] = useState<Array<string>>([]);

    const deleteData = async () => {
        try {
            const alumnoResponse = await fetch(`http://localhost:5000/${id}`);
            if (!alumnoResponse.ok) {
                throw new Error('Error al obtener los datos del alumno');
            }

            const alumnoData = await alumnoResponse.json();
            const confirmed = window.confirm(`¿Está seguro de eliminar al estudiante: ${alumnoData.Nombre} ${alumnoData.Apellido}?`);

            if (!confirmed) {
                return;
            }

            const response = await fetch(`http://localhost:5000/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el alumno');
            }

            const data = await response.json();
            console.log('Alumno eliminado con éxito:');
            toast.success('Alumno eliminado con éxito');
        } catch (error) {
            toast.error('Error al eliminar el alumno');
        }
         }

        const handleCodigoEstudianteChange = (event: any) => {
            const { value } = event.target;
            setId(value);
        };

        const handleSubmit = async (e: any) => {
            e.preventDefault();
            try {
                // Realizar la comparación del ID con el ID de la base de datos
                if (id.trim() !== '') {
                    deleteData();
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
            handleSubmit,
        }
}
export default DeleteStudent;