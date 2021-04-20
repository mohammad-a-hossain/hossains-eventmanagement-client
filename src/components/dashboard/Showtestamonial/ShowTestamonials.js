import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import  { useEffect, useState } from 'react';
import spinner from '../../Shared/spinner/spinner.gif'

const ShowTestamonials = () => {
    const [testimonials, setTestimonials] = useState([]);

     useEffect(() => {
        fetch('https://pacific-falls-55276.herokuapp.com/testimonial')
            .then(res => res.json())
            .then(data =>
                /* console.log(data) */
                setTestimonials(data)) 
            
    }, [])

    const deleteTestimonial=(id)=> {
        console.log(id)
          fetch(`http://localhost:7200/testimonial/delete/${id}`,{
          method:'DELETE' 
      })
      
      .then(() =>{
      fetch("http://localhost:7200/testimonial")
      .then((res) => res.json())
      .then((item) => {
        setTestimonials(item)
       
        }); 
      }) 
      }

    const containerStyle={
        backgroundColor:'rgb(157,185,270)',height:'100%'
    }
    return (
        <section className='container-fluid'>
        <div style={containerStyle} className='row container-fluid'>
         
         <div className='col-md-4'>
       <Sidebar></Sidebar>
         </div>
         <div className='col-md-8'>
             <h1>All testimonials</h1>
         <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">sl no</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Message</th>
                <th className="text-secondary" scope="col">date</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {

                    testimonials.length ===0 && <img src={spinner} alt="spinner" className="img-fluid"/>
                }
                {
                 testimonials.map((testimonial, index) => 
                        
                    <tr>
                         <td>{index + 1}</td>
                        <td>{testimonial.name}</td>
                        <td>{testimonial.message}</td>
                        <td>{testimonial.created}</td>
                         <td><button onClick={()=>deleteTestimonial(testimonial._id)}>delete</button></td>
                    </tr>
                    )
                }  
            </tbody>
        </table>
          
         </div>
     
        </div>
      </section>
    );
};

export default ShowTestamonials

/* <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
               {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                } 
            </tbody>
        </table> */