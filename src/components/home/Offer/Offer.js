
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
//import { Badge } from 'react-bootstrap'

//import Servicedetails from '../serviceDetails/Servicedetails'

 const Offer = () => {
    /* const serviceData=[
        {name:'Fluoride Treatment',
        img:img1,
        describe:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide'},
        {name:'Cavity Filling',
        img:img2,
        describe:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide'},
        {name:'Teath Whitening',
        img:img3,
        describe:'services we provide services we provide services we provide services we provide services we provide services we provideservices we provideservices we provideservices we provide'}

    ] */
    return (
       
        <section className='container'  style={{backgroundColor:'cadetblue'}}>
          
               <p style={{fontSize:'40px',color:'#3A4256'}}>What we offer </p>
          <div className='row container d-flex flex-wrap align-items-center justify-content-center' style={{paddingBottom:'20px'}}>
              
            <Card border="success" style={{ width: '15rem',margin:'5px' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            

            <Card border="danger" style={{ width: '15rem',margin:'5px' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Danger Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            

            <Card border="warning" style={{ width: '15rem',margin:'5px' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Warning Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>


            <Card border="info" style={{ width: '15rem',margin:'5px' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
              </Card>
            </div>

 
    
           
  
                
               

          
        </section>
    )
}
export default Offer

        
         