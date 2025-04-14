import Card from 'react-bootstrap/Card'
import "./CardsC.css"

const CardsC = ({urlImagen, textAlt, id, titulo, descripcion, precio}) => {
  return (
    <Card>
      <Card.Img variant="top" src={urlImagen} className='width=200px' alt={textAlt} />
      <Card.Body>
        <Card.Title className='text-truncate'>{titulo}</Card.Title>
        <Card.Text>
          ${precio}
        </Card.Text>
        <Card.Text className='text-truncate'>
          {descripcion}
        </Card.Text>
        <div className='text-center'>
        <a href={`/productDetail/${id}`} className='btn btn-primary'>Ver Más</a>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardsC