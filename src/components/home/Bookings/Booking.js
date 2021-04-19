import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
//import fakeData from '../fakeData/FakeData'
import './booking.css'
import { Link } from 'react-router-dom'

 const Booking = () => {
    const {key}= useParams()
    const [selectPackage, setSelectPackage] = useState([])
   
    useEffect(()=>{
          fetch('http://localhost:7200/packages')
          .then(res =>res.json())
          .then(data =>setSelectPackage(data)
            )
    },[])
    
     const findPackage = selectPackage.find(pkg =>pkg.key === key)
    //console.log(findPackage )
/*     const handleOrder = () =>{
        const newOrder = {
          packageName:findPackage.title,
          description:findPackage.description,
          duration:findPackage.duration,
          packageType:findPackage.packageType,
          packagePrice:findPackage.price,
          packageKey:findPackage.key,
        /  name:loggedInUser.name, /
          date: new Date().toDateString()
        };
        console.log(newOrder)
        fetch(`http://localhost:7200/addOrder`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }  */

    return (
        <div className='container-fluid d-flex justify-content-center booking p-5 py-5' style={{height:'800px'}}>
            <div className='col-md-3'></div>
          <div className='col-md-6 '>
              
              <ul className='ulback'>
              <h2 style={{color:'red'}}>Booking details...</h2>
              <li><b>Package Title:</b> <br></br>{findPackage?.title}</li>
              <li><b>Package- description:</b>
                  <br></br> {findPackage?.description}</li>
              <li><b>Package duraton :</b> <br></br> {findPackage?.duration}</li>
              <li><b>Package Type: </b><br></br> {findPackage?.packageType}</li> 
              <li><b>Package -price :</b> <br></br>  $ {findPackage?.price}</li>
              <Link to='/'>Back home</Link> 
              <button type='submit'  key={findPackage?.key}><Link to='/shipment'>checkout</Link></button>
              </ul>
           
          </div>
          <div className='col-md-3'></div>
        </div>
    )
}
export default Booking