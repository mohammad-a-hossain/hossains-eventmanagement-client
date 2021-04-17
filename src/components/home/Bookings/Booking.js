import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import fakeData from '../fakeData/FakeData'
import './booking.css'
import { Link } from 'react-router-dom'

 const Booking = () => {
    const packages=[...fakeData]
    const [showPackage,setShowPackage]= useState(packages)
    const {key} = useParams()
  
    console.log(showPackage)
    
    const getPackage =showPackage.find(pkg =>pkg.key ===key)
    console.log(getPackage)
    const {title,description} = getPackage

    return (
        <div className='container-fluid d-flex justify-content-center booking p-5 py-5' style={{height:'800px'}}>
            <div className='col-md-3'></div>
          <div className='col-md-6 '>
              <ul className='ulback'>
              <li><b>Package Title:</b> <br></br>  {title}</li>
              <li><b>Package- description:</b>
                  <br></br> {description}</li>
              <li><b>Package duraton :</b> <br></br>  Ond Day long</li>
              <li><b>Package Type: </b><br></br>  personal</li> 
              <li><b>Package -price :</b> <br></br>  $ 333</li>
              <Link to='/'>Back home</Link> <button>add to cart</button>
              </ul>
           
          </div>
          <div className='col-md-3'></div>
        </div>
    )
}
export default Booking