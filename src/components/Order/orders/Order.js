import React from 'react'
import Navigation from '../../Shared/navber/Navigation'
import AddTestimonial from '../AddTestimonial/AddTestimonial'
import { useState,useEffect } from 'react'



 const Order = () => {
    const [order, setOrder] = useState([])
   
    useEffect(()=>{
          fetch('http://localhost:7200/orders')
          .then(res =>res.json())
          .then(data =>setOrder(data)
            )
    },[])
    return (
        <div className='container-fluid'>
           <Navigation></Navigation>
            <div className='container-fluid' style={{backgroundColor:'lightGray'}}>
           <AddTestimonial orders={order}></AddTestimonial>
            </div>
        </div>
    )
}
export default Order