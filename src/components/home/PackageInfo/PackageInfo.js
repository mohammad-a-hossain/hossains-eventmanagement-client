import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom';

 const PackageInfo = ({packages}) => {
    // console.log(props)

    
 
    // console.log(pakgInfo)
    return (
        <div>
           <Card style={{ width: '18rem',margin:'20px' }}>
            <Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}}src={`data:image/png;base64,${packages.image.img}`} />
           {/*  <Image style={{width:'100px',height:'100px',marginLeft:'100px'}} /> */}
          
            <Card.Body>
            <Card.Title>{packages.title}</Card.Title>
            <Card.Text>
               {packages.description}
            </Card.Text>
            {/* <Button onClick={()=>history.push(`/Booking/${id}`)} variant="primary">Get Package</Button> */}
            <Link to={"/Booking/"+packages.key} >Get Booking</Link> 
            </Card.Body>
            </Card>
            
        </div>
    )
}
export default PackageInfo