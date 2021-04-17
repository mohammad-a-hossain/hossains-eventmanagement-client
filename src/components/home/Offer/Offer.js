import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import provid1 from '../../../images/flaticon/provide1.png'
import provid2 from '../../../images/flaticon/provide2.png'
import provid3 from '../../../images/flaticon/provide3.png'
import provid4 from '../../../images/flaticon/provide4.png'



 const Offer = () => {
   
    return (
       
        <section className='container'  style={{backgroundColor:'cadetblue'}}>
          
               <p style={{fontSize:'40px',color:'#3A4256'}}>What we offer </p>
          <div className='row container d-flex flex-wrap align-items-center justify-content-center' style={{paddingBottom:'20px'}}>  
            <Card border="success" style={{ width: '15rem',margin:'5px' }}>
            <Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={provid1} />
              <Card.Body>
                <Card.Title>Corporate service</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            

            <Card border="success" style={{ width: '15rem',margin:'5px' }}>
            <Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={provid2} />
              
              <Card.Body>
                <Card.Title>Festival service</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            

            <Card border="success" style={{ width: '15rem',margin:'5px' }}>
            <Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={provid3} />
              <Card.Body>
                <Card.Title>Personal Function</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="success" style={{ width: '15rem',margin:'5px' }}>
            <Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={provid4} />

              <Card.Body>
                <Card.Title>Home Decoration</Card.Title>
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

        
         