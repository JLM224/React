import { Container } from 'react-bootstrap'
import TableC from '../components/table/TableC'
import { useEffect, useState } from 'react'

const AdminUserspage = () => {
  const [usuarios, setusuarios] = useState([])

  const obtenerTodosLosUsuarios = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || []
    setusuarios(usuariosLs)
  }


  useEffect(() => {
    obtenerTodosLosUsuarios()
  }, [])

  return (
    <>
    <Container className='text-end my-5'>
      <Botton>+ Añadir Nuevo Usuario</Botton>
    </Container>
    <Container className='my-5'>
      <TableC idpage="usuarios" array={usuarios} />
    </Container>
    </>
  )
}

export default AdminUserspage