import React, { useEffect, useState } from 'react';
import TestimonialInfo from './TestimonialInfo';
import spinner from '../../Shared/spinner/spinner.gif'

 const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect( () => {
        fetch('https://pacific-falls-55276.herokuapp.com/testimonial')
        .then(res => res.json())
        .then(data => setTestimonial(data))
    }, [])
    console.log(testimonial)
   
    return (
        <div className='container-fluid bg-light p-4'>
          <h3 style={{paddingBottom:'15px'}}>testimonials.....</h3> 
          
            <div className='d-flex flex-wrap justify-content-center'>
            {
                    testimonial.length === 0 && <img src={spinner} alt="spinner" className="img-fluid"/>
                }
                {
                    testimonial.map(testimonial =><TestimonialInfo testimonial={testimonial} ></TestimonialInfo>)
                }
                
              
            
                </div>
              
        </div>
     
    )
}

export default Testimonial