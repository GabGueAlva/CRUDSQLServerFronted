'use client'

import { useState } from "react";
import useModal from "./Components/Modal";
import CreateData from "./Modales/Create/modalCreate";
import ConsultData from "./Modales/Consult/modalConsult";
import DeleteData from "./Modales/Delete/modalDelete";
import UpdateData from "./Modales/Edit/modalUpdate";
import ConsultDataAll from "./Modales/ConsultAllStudents/modalAll";



const Home = () => {

  const {
    toggleModal: ToggleModalCreateModule,
    Render: ModalCreateModule,
  } = useModal()

  const {
    toggleModal: ToggleModalConsult,
    Render: ModalConsult,
  } = useModal()

  const {
    toggleModal: ToggleModalDelete,
    Render: ModalDelete,
  } = useModal()

  const {
    toggleModal: ToggleModalUpdate,
    Render: ModalUpdate,
  } = useModal()

  const {
    toggleModal: ToggleModalAll,
    Render: ModalAll,
  } = useModal()


  const createData = () => {
    ToggleModalCreateModule()
  }

  const consultData = () => {
    ToggleModalConsult()
  }

  const deleteData = () => {
    ToggleModalDelete()
  }

  const updateData = () => {
    ToggleModalUpdate()
  }

  const consultAll = () => {
    ToggleModalAll()
  }

  return (
    <div className="w-full md:h-screen h-svh flex justify-center items-center bg-[url('/assest/images/background.jpg')] bg-center ">
      <div className='flex flex-col w-full md:w-3/6 h-5/6 bg-white rounded-lg shadow-md shadow-white gap-5 justify-center items-center'>
        <div className='flex flex-col w-full justify-center items-center gap-5'>
          <p className='flex font-extrabold md:text-3xl text-1xl m-5'>PORTAL DE ALUMNOS</p>
          <p className='flex w-3/5 text-center md:text-lg text-xs'>Podrá consultar o modificar la información de los alumnos junto con sus notas.</p>
          <div className="md:grid grid-cols-2 p-5 m-2 md:place-items-center flex-col justify-center items-center gap-6 ">
            <button
              className='w-[200px] h-[50px] rounded-md bg-[#88C9F2] border  border-gray-200 font-semibold hover:bg-[#03588C]'
              onClick={createData}>
              Crear registro
            </button>
            <button
              className='w-[200px] h-[50px] rounded-md bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
              onClick={updateData}>
              Editar registro
            </button>
            <button
              className='w-[200px] h-[50px]  rounded-md bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
              onClick={consultData}>
              Consultar
            </button>
            <button
              className='w-[200px] h-[50px]  rounded-md bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
              onClick={deleteData}>
              Eliminar registro
            </button>
            <button
              className='w-[200px] h-[50px]  rounded-md bg-[#88C9F2] border border-gray-200 font-semibold hover:bg-[#03588C]'
              onClick={consultAll}>
              Consultar todos los alumnos
            </button>

            <ModalCreateModule>
              <CreateData></CreateData>
            </ModalCreateModule>
            <ModalConsult>
              <ConsultData></ConsultData>
            </ModalConsult>
            <ModalDelete>
              <DeleteData></DeleteData>
            </ModalDelete>
            <ModalUpdate>
              <UpdateData></UpdateData>
            </ModalUpdate>
            <ModalAll>
              <ConsultDataAll></ConsultDataAll>
            </ModalAll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home