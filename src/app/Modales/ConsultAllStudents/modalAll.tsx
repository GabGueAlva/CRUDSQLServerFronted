'use client'

import { useEffect, useState } from "react";
import ConsultAll from "./modalAllLogic";

const ConsultDataAll = () => {

    const {
        alumnos,
        handleSubmit
    } = ConsultAll()

    return (
        <div className="w-full h-full ">
            <p className='flex font-extrabold md:text-3xl text-1xl m-5 p-6'>Consultar registro</p>
                <div className='flex flex-col gap-4 w-full m-5 p-6'>
                <button
                        className='h-[35px] w-[300px] rounded-md  bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
                        onClick={handleSubmit}
                    >
                        Buscar
                    </button>
                
                    {alumnos.length > 0 ? (
                        <div className="grid grid-cols-4 gap-15">
                            <h3>Lista de Alumnos</h3>
                            {alumnos.map((alumno: any) => (
                                <div key={alumno.ID}>
                                    <p>ID: {alumno.ID}</p>
                                    <p>Nombre: {alumno.Nombre}</p>
                                    <p>Apellido: {alumno.Apellido}</p>
                                    <p>Curso ID: {alumno.Curso_id}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        null
                    )}
                </div>
        </div>
    );
}

export default ConsultDataAll