//import React, { useState ,useEffect, useContext} from 'react'
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useEffect, useState } from 'react';
//import { UserContext } from '../../../App';
import Badge from 'react-bootstrap/Badge'
import spinner from '../../Shared/spinner/spinner.gif'
import Button from 'react-bootstrap/Button'


    const containerStyle={
        backgroundColor:'rgb(157,185,270)',height:'100%'
    }

 const Dashboard = () => {
 
    const [orders, setOrder] = useState([])
   
    useEffect(()=>{
          fetch('https://protected-forest-47182.herokuapp.com/orders')
          .then(res =>res.json())
          .then(data =>setOrder(data)

            )
    },[])
    const deleteOrder=(id)=> {
        fetch(`https://protected-forest-47182.herokuapp.com/delete/${id}`,{
        method:'DELETE' 
    })
    
    .then(result =>{
    fetch("https://protected-forest-47182.herokuapp.com/orders")
    .then((res) => res.json())
    .then((products) => {
        setOrder(products)
      //console.log(products)
      }); 
    }) 
    }
    return (
       <section >
           <div style={containerStyle} className='row container-fluid'>
               
               <div className='col-md-4'>
                <Sidebar></Sidebar>
               </div>
               <div className='col-md-8 backPick'>
                   <div>
                   <div className='container justify-content-start p-5'>
              <Button variant="success"  size="lg" style={{margin:'10px'}}>
                    order pending <Badge variant="light">{orders.length}</Badge>
                <span className="sr-only">unread messages</span>
                </Button>
                <Button variant="info"  size="lg" style={{margin:'10px'}}>
                order done <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
                </Button>
                <Button variant="primary"  size="lg" style={{margin:'10px'}}>
               orders delivers <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
                </Button>
                <Button variant="primary"  size="lg" style={{margin:'10px'}}>
               orders un-delives <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
                </Button>
              </div>
                   </div>
              <div className='container justify-content-start'>
                <h1>all orders</h1>
              </div>
              <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Order Title</th>
            <th className="text-secondary" scope="col">order description</th>
            <th className="text-secondary" scope="col">order duration</th>
            <th className="text-secondary" scope="col">order type</th>
            <th className="text-secondary" scope="col">order Price</th>
            <th className="text-secondary" scope="col">order time</th>
            <th className="text-secondary" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.length ===0 && <img src={spinner} alt="spinner" className="img-fluid"/>
            }
           {
                
              orders.map((order,index) =>
                <tr>
                    <td>{index + 1}</td>
                     <td>{order.products.title}</td>
                     <td>{order.products.description}</td>
                     <td>{order.products.duration}</td>
                     <td>{order.products.packageType}</td>
                     <td>{order.products.price}</td>
                     <td>{order.orderTime}</td>
                     <td><button onClick={()=>deleteOrder(order._id)}>delete</button></td>
                 </tr>
                 )
                 }
            
        </tbody>
    </table>
            
               </div>
           </div>
       </section>
    )
}
export default Dashboard