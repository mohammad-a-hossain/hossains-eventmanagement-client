import React from 'react'
import logo from '../../../images/md.jpg'
import Image from 'react-bootstrap/Image'

const Footer = () => {
    return (
        <div className='container-fluid bg-gray'>
         <div className='container d-flex justify-content-center col-md-4 p-5'>
            
             <div>
                  
                  <Image src={logo} roundedCircle style={{width:'50px'}}/>
                  <br></br>
                  <h3>HOSSAIN'S <small>en event management</small></h3>
                  <h4>find us on socials </h4>
                 <ul className='d-flex align-items-lg-center align-items-center'>
                    <li>item icon</li>
                    <li>item icon</li>
                    <li>item icon</li>
                    <li>item icon</li>
                    <li>item icon</li>

                 </ul>
                 <small>design and development by@ mohammad abu hossain -2021@ all right  reserve</small>
             </div>
         </div>
        </div>
    )
}
export default Footer