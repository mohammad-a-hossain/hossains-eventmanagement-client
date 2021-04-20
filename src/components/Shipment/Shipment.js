import React from 'react'
import { useForm } from "react-hook-form";
import PaymentProcess from '../payment/paymentProcess/PaymentProcess';
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'

 const Shipment = () => {
    const {key}= useParams()
    const [selectPackage, setSelectPackage] = useState([])
   
    useEffect(()=>{
          fetch('http://localhost:7200/packages')
          .then(res =>res.json())
          .then(data =>setSelectPackage(data)
            )
    },[])
    const findPackage = selectPackage.find(pkg =>pkg.key === key)
     
    const paymentSubmitDataBase=paymentId =>{
       
        const orderDetails = {
          /* ...userLoggedIn, */
          products:findPackage,
           shipment:shipmentData, 
           paymentId,
           orderTime:new Date()}
        fetch('http://localhost:7200/addOrder',{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(orderDetails)
       })
        .then(res =>res.json())
        .then(data =>{
            if(data){
               
                alert('order has placed');
            }
        })
      }
    
    const { register, handleSubmit, watch, errors } = useForm();
    const [shipmentData,setShipmentData] =useState(null)
             

    const onSubmit=data =>{
        setShipmentData(data,paymentSubmitDataBase)
       }
     
    return (
        <div className='container-fluid'>
            <h1>your shipment details</h1>
            <div className='container'>
                <div className='col-md-12 d-flex justify-content-lg-center' style={{display:shipmentData ?'none':'block'}}>
            
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
              
                <div className='col-md-5' style={{display:shipmentData ?'block':'none'}}>
                    <h2>STRIPE PAYMENT</h2>
              
                <PaymentProcess  paymentSubmitDataBase={paymentSubmitDataBase}  ></PaymentProcess>
                </div>
            </div>
        </div>
    )
}
export default Shipment