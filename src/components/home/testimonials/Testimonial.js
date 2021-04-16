import React from 'react'
import { Card } from 'react-bootstrap'
////import img1 from '../../../images/Ellipse 1.png'
import img2 from '../../../images/salsemann2.png'
import img3 from '../../../images/md.jpg'
//import TestimonialInfo from './TestimonialInfo'
import Image from 'react-bootstrap/Image'

 const Testimonial = () => {
    /*  const testimonials=[
        {name:'Fluoride Treatment',
        address:'california',
        img:img1,
        message:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide services we provide services we provide services we provide services we provide services we provide services we '},
        {name:'Cavity Filling',
        address:'new york',
        img:img2,
        message:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide services we provide services we provide services we provide services we provide services we provide services we '},
        {name:'Teath Whitening',
        address:'michigan',
        img:img3,
        message:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide services we provide services we provide services we provide services we provide services we provide services we '}
     ] */
    return (
        <div className="container" style={{padding:'100px 0px',backgroundColor:'yellow'}}>
            <h3 style={{textAlign:'left',paddingBottom:'15px'}}>testimonials.....</h3>
          
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
             
               
               <div className='col-md-4 border-2'>
               <Image src={img3} roundedCircle />
               <h3>name</h3>
               <p> Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               </p>
               </div>
               <div className='col-md-4'>
               <Image src={img3} roundedCircle />
               <h3>name</h3>
               <p> Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               </p>
               </div>
               <div className='col-md-4'>

               <Image src={img3} roundedCircle />
               <h3>name</h3>
               <p> Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               </p>
               </div>
               <div className='col-md-4'>

                <Image src={img3} roundedCircle />
                <h3>name</h3>
                <p> Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                </p>
                </div>
                <div className='col-md-4'>

<Image src={img3} roundedCircle />
<h3>name</h3>
<p> Some quick example text to build on the card title and make up the bulk of
Some quick example text to build on the card title and make up the bulk of
Some quick example text to build on the card title and make up the bulk of
</p>
</div>
<div className='col-md-4'>

<Image src={img3} roundedCircle />
<h3>name</h3>
<p> Some quick example text to build on the card title and make up the bulk of
Some quick example text to build on the card title and make up the bulk of
Some quick example text to build on the card title and make up the bulk of
</p>
</div>
             {/*    <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img3} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img3} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img2} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img3} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card> */}
                </div>
              
        </div>
     
    )
}

export default Testimonial