import React from 'react'
import logo from '../../../images/logo.png'
import Image from 'react-bootstrap/Image'
import faceBook from '../../../images/socialIcon/facebook.png'
import twitter from '../../../images/socialIcon/twitter.png'
import instagram from '../../../images/socialIcon/instagram.png'
import youtube from '../../../images/socialIcon/youtube.png'
import linkdin from '../../../images/socialIcon/linkedin.png'

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
                    <i><Image style={{width:'40px',height:'40px',marginRight:'10px'}} src={faceBook}/></i>
                    <i><Image style={{width:'40px',height:'40px',marginRight:'10px'}} src={twitter}/></i>
                    <i><Image style={{width:'40px',height:'40px',marginRight:'10px'}} src={instagram}/></i>
                    <i><Image style={{width:'40px',height:'40px',marginRight:'10px'}} src={youtube}/></i>
                    <i><Image style={{width:'40px',height:'40px',marginRight:'10px'}}  src={linkdin}/></i>
                  

                 </p>
               
             </div>
             
         </div>
         <small>design and development by@ mohammad abu hossain -2021</small>
        </div>
    )
}
export default Footer