import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom';

 const PackageInfo = ({pakgInfo}) => {
    // console.log(props)

    
 
    // console.log(pakgInfo)
    return (
        <div>
           <Card style={{ width: '18rem',margin:'20px' }}>
            <Card.Img variant="top" style={{width:'100px',height:'100px',margin:'0 auto'}} src={pakgInfo.img} />
            <Card.Body>
            <Card.Title>{pakgInfo.title}</Card.Title>
            <Card.Text>
               {pakgInfo.description}
            </Card.Text>
            {/* <Button onClick={()=>history.push(`/Booking/${id}`)} variant="primary">Get Package</Button> */}
            <Link to={"/Booking/"+pakgInfo.key} >Get Booking</Link> 
            </Card.Body>
            </Card>
            
        </div>
    )
}
export default PackageInfo