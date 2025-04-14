import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import {Col, Container, Row} from "react-bootstrap"
import { useParams } from "react-router"
import "./css/ProductoDetailPage.css"


const ProductDetailpage = () => {
  const {id} = useParams()
  const [producto, setProducto] = useState({})
  const obtenerProductos= async() => {
    try {
      const producto = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await producto.json()
      console.log(data)
      setProducto(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerProductos()
  }, [])


  return (
    <>
    <Container className="my-5">
      <Row>
        <Col className="producto-imagen text-center">
        <img src={producto.image} alt={producto.title} />
        </Col>
        <Col>
        <h2>{producto.title}</h2>
        <p>${producto.price}</p>
        <p>{producto.description}</p>


        <Button variant="warning" className="mx-2">Añadir al Carrito</Button>
        <Button variant="success">Comprar</Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ProductDetailpage