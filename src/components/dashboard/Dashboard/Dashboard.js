//import React, { useState ,useEffect, useContext} from 'react'
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';//
//import { UserContext } from '../../../App';
import Badge from 'react-bootstrap/Badge'
import backImg from '.././../../images/eventimg2.jpg'

import Button from 'react-bootstrap/Button'
import { Image } from 'react-bootstrap'

    const containerStyle={
        backgroundColor:'rgb(157,185,270)',height:'100%'
    }

 const Dashboard = () => {
   /*  const [selectedDate, setSelectedDate] =useState(new Date())
    const [appointments,setAppointments] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext) */

    
  /*   const handleChangeDate = date => {
        setSelectedDate(date);
    } */
   /*  useEffect(() => {
        fetch('https://protected-plains-09672.herokuapp.com/appointmentsByDate',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate,email:loggedInUser.email})
         
        })
        .then(res =>res.json())
        .then(data =>setAppointments(data))
    }, [selectedDate])
     */
    return (
       <section >
           <div style={containerStyle} className='row container-fluid'>
               
               <div className='col-md-4'>
                <Sidebar></Sidebar>
               </div>
               <div className='col-md-8 backPick'>
              <div className='container justify-content-start p-5'>
              <Button variant="success"  size="lg" style={{margin:'10px'}}>
                    order pending <Badge variant="light">9</Badge>
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
         {/*      <Image src={backImg} alt="image"/> */}
               </div>
           </div>
       </section>
    )
}
export default Dashboard