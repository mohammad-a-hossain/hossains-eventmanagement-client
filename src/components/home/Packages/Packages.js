
import React from 'react'
import './packages.css'
//import { Card,Button } from 'react-bootstrap'
// import img1 from '../../../images/flaticon/corporate.png'
// import img2 from '../../../images/flaticon/festival.png'
//  import img3 from '../../../images/flaticon/personal.png'
import PackageInfo from '../PackageInfo/PackageInfo'

import { useState,useEffect } from "react";



const Packages = () => {
  const [packages, setPackages] = useState([])
    useEffect( () => {
        fetch('http://localhost:7200/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
   // console.log(testimonial)
   
/* 
 const allPackage=[...fakeData]
  console.log(allPackage) */

      return (
        <div className='container-fluid bg-primary p-4' >
             <h2>Our packages</h2>
            <div className='d-flex flex-wrap justify-content-center'>
              {
                packages.map(packages =><PackageInfo packages={packages}  ></PackageInfo>)
              }
            </div>
        </div>
    )
}
export default Packages

/* <Card style={{ width: '18rem',margin:'20px' }}>
 
  <Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Get Package</Button>
  </Card.Body>
</Card> */
/* <Card style={{ width: '18rem',margin:'20px'}}>
<Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={img2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Get Package</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',margin:'20px' }}>
<Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={img3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Get Package</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',margin:'20px' }}>
<Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Get Package</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',margin:'20px' }}>
<Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Get Package</Button>
  </Card.Body>
</Card> */