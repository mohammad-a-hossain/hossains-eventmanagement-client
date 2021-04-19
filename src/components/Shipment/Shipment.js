import React from 'react'
import { useForm } from "react-hook-form";
import  { useState } from "react";
import PaymentProcess from '../payment/paymentProcess/PaymentProcess';

 const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [shipmentData,setShipmentData] =useState(null)
             

    const onSubmit=data =>{
        setShipmentData(data)
       }
     
    return (
        <div className='container-fluid'>
            <h1>your shipment details</h1>
            <div className='container'>
                <div className='col-md-12 d-flex justify-content-lg-center'/* style={{display:shipmentData ?'none':'block'}} */>
            
             <form onSubmit={handleSubmit(onSubmit)} style={{margin:'0 auto'}}>
   
                <input type='text' /* defaultValue={userLoggedIn.name}  */name="name" ref={register({ required: true })}  style={{marginBottom:'10px'}} placeholder='customer name'/>
                {errors.name && <span className="error"> name is required</span>}<br></br>
                
                <input type='email' /* defaultValue={userLoggedIn.email}  */name="email" ref={register({ required: true })} style={{marginBottom:'10px'}} placeholder='customer email'/>
                {errors.name && <span className="error"> name is required</span>}<br></br>
               
                <textarea type="text" name="address" ref={register({ required: true })} style={{marginBottom:'10px'}} placeholder='customer address'/>
                {errors.name && <span>" name is required"</span>}<br></br>
               
                <input type='text' name="phon no" placeholder='phon no' ref={register({ required: true })} style={{marginBottom:'10px'}}/>
                {errors.name && <span>" phon is required"</span>}<br></br>

                <input type="submit" />
            </form>
             </div>
              
                <div className='col-md-5'>
                    <h2>STRIPE PAYMENT</h2>
                {/* <ProcessPayments paymentSubmit={paymentSubmitDataBase}></ProcessPayments> */}
                <PaymentProcess /* paymentSubmit={paymentSubmitDataBase} */ ></PaymentProcess>
                </div>
            </div>
        </div>
    )
}
export default Shipment