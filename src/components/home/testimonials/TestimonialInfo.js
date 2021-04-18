import React from 'react'
import Image from 'react-bootstrap/Image'


 const TestimonialInfo = ({testimonial}) => {
    return ( 
        
           <div className='col-md-4 col-lg-4 col-sx-12 shadow-lg p-3  bg-body border-rounded'>
                <Image style={{width:'100px',height:'100px',marginLeft:'100px'}} src={`data:image/png;base64,${testimonial.image.img}`}/>
          
               
           {/*     <Image src={img3}style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle />  */}
               <h3>{testimonial.name}</h3>
               <p>{testimonial.message}
               </p>
               </div>
          
      
    )
}
export default TestimonialInfo