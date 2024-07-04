import { ToastContainer } from "react-toastify";
import EditStudent from "./modalUpdateLogic";

const UpdateData = () => {

    const {
        alumnos,
        handleCodigoEstudianteChange,
        handleConsulta,
        register,
        formState: { errors },
        handleSubmit,
        onSubmit,
        idFound
    } = EditStudent()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full h-full">
                <p className='flex font-extrabold md:text-3xl text-1xl m-5'>Editar registro</p>
                <div className="md:grid grid-cols-2 p-5 m-2 md:place-items-center flex-col justify-center items-center">
                    <div className='flex flex-col w-[300px] gap-4'>
                        <div className="flex flex-col gap-2">
                            <label className='md:text-m text-sm font-bold' >Ingrese el código del estudiante que desea modificar</label>
                            <input
                                className='h-[35px] md:text-m text-sm border border-gray-200 rounded-lg p-3 focus:border-[#023373] focus:outline-none'
                                onChange={handleCodigoEstudianteChange}
                                placeholder='Código'></input>
                        </div>
                        <button
                            className='h-[35px] rounded-md bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
                            onClick={handleConsulta}
                        >
                            Consultar registro
                        </button>
                        {idFound  ? (
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
                            null
                        )}
                    </div>
                    {
                        idFound ? (
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
                                    Modificar registro
                                </button>
                            </div>
                        ) : (
                            <p>No se ha encontrado ningún alumno</p>
                        )
                    }
                </div>
            </div>
            <ToastContainer /> 
        </form>
    );
}

export default UpdateData