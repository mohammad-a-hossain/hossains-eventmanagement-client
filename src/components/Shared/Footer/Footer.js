import React from 'react'
import logo from '../../../images/logo.png'
import Image from 'react-bootstrap/Image'

const Footer = () => {
    return (
        <div className='container-fluid bg-gray'>
         <div className='container d-flex justify-content-center col-md-4 col-lg-4 col-sx-12 p-5'>
            
             <div>
                  
                  <Image src={logo} thumbnail style={{width:'100px'}}/>
                  <br></br>
                  <h3>HOSSAIN'S <br/> <small>en event management organization</small></h3>
                  <h5>find us on socials </h5>
                 <p className='d-flex align-items-lg-center align-items-center'>
                    <li>item icon</li>
                    <li>item icon</li>
                    <li>item icon</li>
                    <li>item icon</li>
                    <li>item icon</li>

                 </p>
               
             </div>
             
         </div>
         <small>design and development by@ mohammad abu hossain -2021</small>
        </div>
    )
}
export default Footer