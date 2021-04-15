//import React, { useEffect, useState } from 'react';
import { AppointmentDataTable } from '../../dashboard/appointmentDataTable/AppointmentDataTable';
import Sidebar from '../../dashboard/sidebar/Sidebar';



const AllPatients = () => {
  /*   const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://protected-plains-09672.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
 */
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable  />
            </div>
        </div>
    );
};

export default AllPatients;