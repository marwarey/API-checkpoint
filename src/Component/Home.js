import React from 'react'
import{Carousel}from 'react-bootstrap'
function Home (){
    return(
        <div>
<Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src='https://visme.co/blog/wp-content/uploads/2021/09/header-1.png'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://visme.co/blog/wp-content/uploads/2021/04/flyer-backgrounds-header.png'
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://www.theedublogger.com/files/2020/05/How-to-make-a-slideshow-01-1-1080x281.png'
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

    )
  
}
export default Home