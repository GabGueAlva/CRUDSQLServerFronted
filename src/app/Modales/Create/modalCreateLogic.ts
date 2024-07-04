import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';



type Inputs = {
    nombre: string
    apellido: string
    email: string
    curso_id: number
}

const CreateDataLogic = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();
    const onSubmit = async (data: Inputs) => {
        try {
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Error al crear el alumno');
            }
            toast.success('Alumno creado con éxito'); // Mostrar notificación de éxito
            console.log('Alumno creado con éxito');
            setValue("email", "")
            setValue("apellido", "")
            setValue("nombre", "")
            setValue("curso_id", 0)
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error al crear datos.');
        }
    };

    return {
        register, 
        handleSubmit,
        onSubmit,
        toast,
        formState: { errors }
    }
}
export default CreateDataLogic;
