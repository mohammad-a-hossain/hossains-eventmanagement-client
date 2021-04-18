import React, { useEffect, useState } from 'react';
import ShowAllPackeges from '../../Showallpackage/ShowAllPackeges';
import Sidebar from '../../sidebar/Sidebar';


const AllPackeges = () => {
     const [packages, setPackages] = useState([]);

     useEffect(() => {
        fetch('http://localhost:7200/packages')
            .then(res => res.json())
            .then(data =>
                /* console.log(data) */
              setPackages(data)) 
            
    }, [])
  //console.log(packages)
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
                 <ShowAllPackeges packages={packages}></ShowAllPackeges>
               </div>
           
              </div>
            </section>
    );
}

export default AllPackeges