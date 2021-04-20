import React, { useEffect, useState } from 'react';
//import ShowAllPackeges from '../../Showallpackage/ShowAllPackeges';
import Sidebar from '../../sidebar/Sidebar';
import spinner from '../../../Shared/spinner/spinner.gif'


const AllPackeges = () => {
     const [packages, setPackages] = useState([]);

     useEffect(() => {
        fetch('https://pacific-falls-55276.herokuapp.com/packages')
            .then(res => res.json())
            .then(data =>
                /* console.log(data) */
              setPackages(data))         
    }, [])

     const deletePackage=(id)=> {
          fetch(`https://pacific-falls-55276.herokuapp.com/delete/${id}`,{
          method:'DELETE' 
      })
      
      .then(result =>{
      fetch("https://pacific-falls-55276.herokuapp.com/packages")
      .then((res) => res.json())
      .then((products) => {
        setPackages(products)
        //console.log(products)
        }); 
      }) 
      }


 /*   
 

 /* ---------------- */
 const containerStyle={
  backgroundColor:'rgb(157,185,270)',height:'100%'
}

    return (
      <section className='container-fluid'>
              <div style={containerStyle} className='row container-fluid d-flex justify-content-lg-center'>
               
                <div className='col-md-4'> 
              <Sidebar></Sidebar>
               </div> 
               <div className='col-md-8'>
                {/*  <ShowAllPackeges packages={packages}></ShowAllPackeges> */}
                <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Package Title</th>
            <th className="text-secondary" scope="col">Package description</th>
            <th className="text-secondary" scope="col">Package duration</th>
            <th className="text-secondary" scope="col">package type</th>
            <th className="text-secondary" scope="col">Insert date</th>
            <th className="text-secondary" scope="col">Price</th>
            <th className="text-secondary" scope="col">icon</th>
            <th className="text-secondary" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                packages.length ===0 && <img src={spinner} alt="spinner" className="img-fluid"/>
            }
           {
             packages.map((packaege, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{packaege.title}</td>
                    <td>{packaege.description}</td>
                    <td>{packaege.duration}</td>
                    <td>{packaege.packageType}</td>
                    <td>{packaege.date}</td>
                    <td>{packaege.price}</td>
                    <td>
                    {<img src={`data:image/png;base64,${packaege.image.img}`} alt='' style={{width:'50px',height:'50px'}} />}
                    </td>
                    <td>
                        <button>edit</button>
                        <button onClick={()=>deletePackage(packaege._id)}>delete</button>
                    </td>
                </tr>
                )
            } 
        </tbody>
    </table>
               </div>
           
              </div>
            </section>
    );
}

export default AllPackeges