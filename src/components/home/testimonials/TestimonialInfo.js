import React from 'react'
import { Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


 const TestimonialInfo = ({testimonial}) => {
    return ( 
        <div className='shadow-lg'>
        <Card style={{ width: '25rem',margin:'20px' }}>
        <Image style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle  src={`data:image/png;base64,${testimonial.image.img}`}/>
         <Card.Body>
         <Card.Title>{testimonial.name}</Card.Title>
         <Card.Text>
         <p>{testimonial.message}-------</p>
         </Card.Text>
        
         </Card.Body>
         </Card>
         
     </div>
        
          /*  <div className='col-md-4 col-lg-4 col-sx-12 shadow-lg p-3 m-2  border-rounded'>
               <p>{testimonial.message}-------</p>
              
               
           {/*     <Image src={img3}style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle />  */
            /*  <div className='d-flex'>
                     <Image style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle  src={`data:image/png;base64,${testimonial.image.img}`}/>
           <h3>{testimonial.name}</h3>
              </div>
            
              
               </div>
           */
      
    )
}
export default TestimonialInfo