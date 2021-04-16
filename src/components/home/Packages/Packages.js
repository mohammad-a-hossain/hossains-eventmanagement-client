
import React from 'react'
//import doctor from '../../../images/5790-removebg.png'
import './packages.css'
import { Card,Button } from 'react-bootstrap'
import img1 from '../../../images/homedeco1.jpg'
import img2 from '../../../images/tour1.jpg'
import img3 from '../../../images/wedding2.jpg'

const Packages = () => {
    return (
        <div className='container-fluid bg-primary p-4' >
             <h2>Our packages</h2>
            <div className='d-flex flex-wrap justify-content-center'>
               
 <Card style={{ width: '18rem',margin:'20px' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Get Package</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',margin:'20px'}}>
  <Card.Img variant="top" src={img1} />
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
  <Card.Img variant="top" src={img1} />
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
  <Card.Img variant="top" src={img1} />
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
  <Card.Img variant="top" src={img2} />
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
  <Card.Img variant="top" src={img3} />
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
  <Card.Img variant="top" src={img2} />
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
  <Card.Img variant="top" src={img2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Get Package</Button>
  </Card.Body>
</Card>
</div>
 
</div>
    )
}
export default Packages