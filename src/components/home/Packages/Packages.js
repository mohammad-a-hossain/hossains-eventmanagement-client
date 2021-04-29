
import React from 'react'
import './packages.css'
import spinner from '../../Shared/spinner/spinner.gif'
import PackageInfo from '../PackageInfo/PackageInfo'

import { useState,useEffect } from "react";



const Packages = () => {
  const [packages, setPackages] = useState([])
    useEffect( () => {
        fetch('https://protected-forest-47182.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
   // console.log(testimonial)
   

      return (
        <div className='container-fluid bg-primary p-4' >
             <h2>Our packages</h2>
            <div className='d-flex flex-wrap justify-content-center'>
            {
          packages.length === 0 && <img src={spinner} alt="spinner" className="img-fluid"/>
            }
              {
                packages.map(packages =><PackageInfo packages={packages}  ></PackageInfo>)
              }
            </div>
        </div>
    )
}
export default Packages

