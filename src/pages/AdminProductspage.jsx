import { Container } from "react-bootstrap"
import TableC from "../components/table/TableC"
import { useEffect, useState } from "react"


const AdminProductspage = () => {
  const [productos, setproductos] = useState([])

  obtenerTodosLosProductos = () => {
    const productos = JSON.parse(localStorage.getItem("productos")) || []
    setproductos(productosLs)
  }


  useEffect(() => {
    obtenerTodosLosProductos()
  },[])
  return (
    <>
    <Container className='text-end my-5'>
      <Botton>+ Añadir Nuevo Producto</Botton>
    </Container>
    <Container className="my-5">
      <TableC idpage="productos" array={productos} />
    </Container>
    </>
  )
}

export default AdminProductspage