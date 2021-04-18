import React from 'react'
import homeDecor from '../../../images/homedeco5.jpg'
import festival from '../../../images/Corporate-Festiva.jpg'
import personal from '../../../images/parsonalFunction.jpg'
import Carousel from 'react-bootstrap/Carousel'



 const HeaderMain = () => {
    return (
        <div style={{height:'800px'}} className='row col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      style={{height:'800px',width:'100%'}}
      src={homeDecor}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>WE TAKE RESPONSIBLE TO DECORATE YOUR HOME</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
     style={{height:'800px',width:'100%'}}
      src={festival}
      alt="Second slide"
    />
      <Carousel.Caption>
      <h3 style={{color:'blue'}}>ARRANGEMENT PERSONAL AND CORPORATE FESTIVES</h3>
      <p style={{color:'blue'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
     style={{height:'800px',width:'100%'}}
      src={personal}
      alt="Second slide"
    /> 
    <Carousel.Caption>
      <h3 style={{color:'green'}}>ALWAYS READY TO PERSONAL FUNCTIONS</h3>
      <p style={{color:'green'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
</div>
     
    )
}
export default HeaderMain

/* 
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
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
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */