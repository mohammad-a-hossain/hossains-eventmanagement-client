
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
       
        <section className='container' style={{backgroundColor:'cadetblue'}}>
          
               <p style={{fontSize:'40px',color:'#3A4256'}}>What we offer </p>
               <div>
                <Container>
                  <Row md={4}>
                    <Col>
                    <h2>Weeding ceremony</h2>
                    </Col>
                    <Col xs={6}>
                     <h2>house decoration</h2> 
                    </Col>
                    <Col>
                   <h2>Burri and funaral rituals</h2> 
                    </Col>
                    <Col>
                    <h2>Tourist assist</h2>
                    </Col>
                  </Row>
                </Container>
 
    
              </div>
  
                
               

          
        </section>
    )
}
export default Offer

        
         