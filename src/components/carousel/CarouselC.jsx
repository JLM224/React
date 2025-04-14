import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

const CarouselC = () => {
  return (
    <>
    <Carousel fade className='my-3'>
      <Carousel.Item>
        <img src="https://humanidades.com/wp-content/uploads/2017/03/pajaro-azul-e1563758291533.jpg" alt="" 
        className='w-100' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://amp.autopista.es/uploads/s1/98/42/16/5/los-periquitos-son-las-unicas-especies-de-aves-descubiertas-hasta-ahora-que-son-susceptibles-al-bostezo-contagioso_1_1000x575.jpeg" alt="" className='w-100' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.aarp.net/content/dam/aarpe/es/home/hogar-familia/familia-bienestar/info-2023/guia-observacion-de-aves-para-principiantes/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/home-and-family/family-and-friends/2023/07/1140-bluebird-branches-flowers-esp.jpg" alt="" className='w-100' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselC