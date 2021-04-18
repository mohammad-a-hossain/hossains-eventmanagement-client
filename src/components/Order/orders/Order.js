import React from 'react'
import Navigation from '../../Shared/navber/Navigation'
import AddTestimonial from '../AddTestimonial/AddTestimonial'



 const Order = () => {
    return (
        <div className='container-fluid'>
           <Navigation></Navigation>
            <div className='container-fluid' style={{backgroundColor:'lightGray'}}>
           <AddTestimonial></AddTestimonial>
            </div>
        </div>
    )
}
export default Order