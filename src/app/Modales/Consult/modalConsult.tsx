'use client'

import { useEffect, useState } from "react";
import ConsultStudent from "./modalConsultLogic";

const ConsultData = () => {

    const {
        alumnos,
        handleCodigoEstudianteChange,
        handleSubmit
    } = ConsultStudent()

    return (
        <div className="w-full h-full ">
            <p className='flex font-extrabold md:text-3xl text-1xl m-5 scroll-auto'>Consultar registro</p>
            <div className="md:grid grid-cols-2 p-5 m-2 md:place-items-center flex-col justify-center items-center ">
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
                        Consultar registro
                    </button>

                    {alumnos.length > 0 ? (
                        <div>
                            <h3>Lista de Alumnos</h3>
                            {alumnos.map((alumno: any) => (
                                <div key={alumno.ID}>
                                    <p>ID: {alumno.ID}</p>
                                    <p>Nombre: {alumno.Nombre}</p>
                                    <p>Apellido: {alumno.Apellido}</p>
                                    <p>Email: {alumno.Email}</p>
                                    <p>Curso ID: {alumno.Curso_id}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No se ha encontrado ningún alumno aún</p>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default ConsultData