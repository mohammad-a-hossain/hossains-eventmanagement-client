import React, { useEffect, useState } from 'react';
import TestimonialInfo from './TestimonialInfo';

 const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect( () => {
        fetch('http://localhost:7200/testimonial')
        .then(res => res.json())
        .then(data => setTestimonial(data))
    }, [])
    console.log(testimonial)
   
    return (
        <div className="container-fluid" style={{padding:'100px 0px',backgroundColor:'lightGray'}}>
          <h3 style={{textAlign:'left',paddingBottom:'15px'}}>testimonials.....</h3> 
          
            <div className='container d-flex flex-wrap align-items-center justify-content-center'>
                {
                    testimonial.map(testimonial =><TestimonialInfo testimonial={testimonial} ></TestimonialInfo>)
                }
                
              
               {/* <div className='col-md-4 col-lg-4 col-sx-12 shadow-lg p-3 bg-body rounded'>
               <Image src={img3} style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle />
               <h3>name</h3>
               <p> Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               </p>
               </div>
               <div className='col-md-4 col-lg-4 col-sx-12 shadow-lg p-3 bg-body rounded'>

               {/* <Image src={img3} style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle /> */}
             {/*   <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
               <h3>name</h3>
               <p> Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               Some quick example text to build on the card title and make up the bulk of
               </p>
               </div> */}
             {/*   <div className='col-md-4 col-lg-4 col-sx-12 shadow-lg p-3 bg-body rounded'>

                <Image src={img3} style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle />
                <h3>name</h3>
                <p> Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                </p>
                </div> */}
              {/*   <div className='col-md-4 col-lg-4 col-sx-12 shadow-lg p-3 bg-body rounded'>

                <Image src={img3}style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle />
                <h3>name</h3>
                <p> Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                </p>
                </div> */}
            {/*     <div className='col-md-4 col-lg-4 col-sx-12 shadow-lg p-3 bg-body rounded'>

                <Image src={img3} style={{width:'100px',height:'100px',marginLeft:'100px'}} roundedCircle />
                <h3>name</h3>
                <p> Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                Some quick example text to build on the card title and make up the bulk of
                </p> 
        </div> */}
             {/*    <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img3} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img3} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img2} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px' }}>
               <Image src={img3} roundedCircle />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card> */}
                </div>
              
        </div>
     
    )
}

export default Testimonial