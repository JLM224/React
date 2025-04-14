import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import CardsC from "../components/cards/CardsC"
import CarouselC from "../components/carousel/CarouselC"

export const Homepage = () => {
  const [productos, setProductos] = useState([])

  const obtenerProductosApi = async() =>{
    try {
      const productos = await fetch("https://fakestoreapi.com/products")
      const data = await productos.json()
      localStorage.setItem("productos", JSON.stringify(productos))
      setProductos(data)
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
    obtenerProductosApi()
}, [])
  return (
    <>
    <CarouselC/>
    <h2 className="text-center">Nuestros Productos</h2>
    <Container className="my-5">
        <Row>
            {
              productos.map((producto) => 
                <Col key={producto.id} sm="12" md="6" lg="4" className="my-3">
                  <CardsC urlImagen={producto.image} textAlt={producto.description} id={producto.id} 
                  titulo={producto.titulo} precio={producto.price} descripcion={producto.description} />
                </Col>
              )
            }
        </Row>
    </Container>
    </>
  )
}

export default Homepage