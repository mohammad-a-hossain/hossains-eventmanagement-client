//import React, { useState } from 'react'
import React from 'react'
import AppointmentForm from '../appointmetnForm/AppointmentForm'

 const BookingCard = () => {
    /* const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    } */
  
    return (
        <div className='col-md-4 mb-3'>
            <div className='card p-3'>
                <div className='card-body text-center'>
                    <h5 className='card-title text-brand'> subject</h5>
                    <h6> hour</h6>
                    <p>space available</p>
                    <button /* onClick={openModal}  */className='btn btn-brand text-uppercase'>Book Appointment</button>
                    
                    <AppointmentForm /* modalIsOpen={modalIsOpen} */  ></AppointmentForm>
                    
                </div>

            </div>
            
        </div>
    )
}
export default BookingCard