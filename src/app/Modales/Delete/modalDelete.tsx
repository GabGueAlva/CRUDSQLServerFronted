'use client'

import { useEffect, useState } from "react";
import DeleteStudent from "./modalDeleteLogic";
import { ToastContainer } from 'react-toastify';


const DeleteData = () => {

    const {
        alumnos,
        handleCodigoEstudianteChange,
        handleSubmit,
    } = DeleteStudent()

    return (
        <div className="w-full h-full">
            <p className='flex font-extrabold md:text-3xl text-1xl m-5'>Eliminar registro</p>
            <div className="md:grid grid-cols-2 p-5 m-2 md:place-items-center flex-col justify-center items-center">
                <div className='flex flex-col w-[300px] gap-4'>
                    <div className="flex flex-col gap-2">
                        <label className='md:text-m text-sm font-bold' >Ingrese el código del estudiante</label>
                        <input
                            className='h-[35px] md:text-m text-sm border border-gray-200 rounded-lg p-3 focus:border-[#023373] focus:outline-none'
                            onChange={handleCodigoEstudianteChange}
                            placeholder='Código'></input>
                    </div>
                    <button
                        className='h-[35px] rounded-md bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
                        onClick={handleSubmit}
                    >
                        Eliminar registro
                    </button>                   
                </div>
            </div>
            <ToastContainer /> 
        </div>
    );
}

export default DeleteData