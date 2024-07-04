'use client'

import CreateDataLogic from "./modalCreateLogic";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateData = () => {

    const {handleSubmit, register, onSubmit, formState: { errors }} = CreateDataLogic()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full h-full">
                <p className='flex font-extrabold md:text-3xl text-1xl m-5'>Crear registro</p>
                <div className="md:grid grid-cols-2 p-5 m-2 md:place-items-center flex-col justify-center items-center">
                    <div className='flex flex-col w-[300px] gap-4'>
                        <div className="flex flex-col gap-2">
                            <label className='md:text-m text-sm font-bold' >Ingrese el código del curso del estudiante</label>
                            <input
                                {...register("curso_id", { required: 'El ID del curso es requerido' })}
                                className='h-[35px] md:text-m text-sm border border-gray-200 rounded-lg p-3 focus:border-[#023373] focus:outline-none'
                                placeholder='Código'></input>
                            {errors.curso_id && <p className="text-red-400 text-sm">{errors.curso_id.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='md:text-m text-sm font-bold' >Ingrese el nombre del estudiante</label>
                            <input
                                {...register("nombre", { required: 'El nombre del estudiante es requerido' })}
                                className='h-[35px] md:text-m text-sm border border-gray-200 rounded-lg p-3 focus:border-[#023373] focus:outline-none'
                                placeholder='Nombre'></input>
                            {errors.nombre && <p className="text-red-400 text-sm" >{errors.nombre.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='md:text-m text-sm font-bold' >Ingrese el apellido del estudiante</label>
                            <input
                                {...register("apellido", { required: 'El apellido del estudiante es requerido' })}
                                className='h-[35px] md:text-m text-sm border border-gray-200 rounded-lg p-3 focus:border-[#023373] focus:outline-none'
                                placeholder='Apellido'></input>
                            {errors.apellido && <p className="text-red-400 text-sm">{errors.apellido.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col w-[300px] gap-4 ">
                        <div className="flex flex-col gap-2">
                            <label className='md:text-m text-sm font-bold' >Ingrese el correo electrónico del estudiante</label>
                            <input
                                {...register("email")}
                                className='h-[35px] md:text-m text-sm border border-gray-200 rounded-lg p-3 focus:border-[#023373] focus:outline-none'
                                placeholder='Correo electrónico'></input>
                        </div>
                        <button
                            type="submit"
                            className='h-[35px] rounded-md bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
                        >
                            Crear registro
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer /> 
        </form>
    );
}

export default CreateData