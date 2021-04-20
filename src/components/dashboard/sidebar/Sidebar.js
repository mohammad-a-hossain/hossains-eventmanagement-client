//import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCommentAlt, faCog,faTasks,faPeopleCarry, faSignOutAlt,faGripHorizontal,faHome, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
//import { UserContext } from '../../../App';

const Sidebar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [isDoctor, setIsDoctor] = useState(false)
    // useEffect(() => {
    //     fetch('https://protected-plains-09672.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-4 py-5" style={{height:"100vh"}}>
             <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>DASHBOARD</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
          {/*   {isDoctor &&  */}<div>
                    <li>
                        <Link to="/dashboard/allPackage/AllPackeges" className="text-white">
                            <FontAwesomeIcon icon={faPeopleCarry} /> <span>Show packages</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addPackage" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Add Packages</span>
                        </Link>
                    </li>
                {/*     <li>
                        <Link to="/addTestimonial/AddTestiMonial" className="text-white">
                             <FontAwesomeIcon icon={faCommentAlt} /> <span>Add Testimonials</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/dashboard/Dashboard/Showtestamonial" className="text-white">
                             <FontAwesomeIcon icon={faCommentAlt} /> <span>Show Testimonials</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#@" className="text-white" disable >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting" className="text-white" >
                         <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                   
                </div> 
             
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;