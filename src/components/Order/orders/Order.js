import React from 'react'
import Navigation from '../../Shared/navber/Navigation'
import AddTestimonial from '../AddTestimonial/AddTestimonial'
import { useState,useEffect } from 'react'



 const Order = () => {
    const [orders, setOrder] = useState([])
   
    useEffect(()=>{
          fetch('https://pacific-falls-55276.herokuapp.com/orders')
          .then(res =>res.json())
          .then(data =>setOrder(data)

            )
    },[])
    console.log(orders)
    return (
        <div className='container-fluid'>
           <Navigation></Navigation>
            <div className='container-fluid' style={{backgroundColor:'lightGray'}}>
           <AddTestimonial orders={orders}></AddTestimonial>
            </div>
        </div>
    )
}
export default Order