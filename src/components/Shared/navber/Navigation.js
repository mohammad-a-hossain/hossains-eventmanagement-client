import React from 'react'
import { Link } from 'react-router-dom';
import { Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import logo from '../../../images/logo.png'

<Navbar/>
 const Navigation = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top"  >
  <Navbar.Brand to="/"><Image src={logo} style={{height:'50px',width:'100px'}} thumbnail /> HOSSAIN'S</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav class="d-flex flex-wrap justify-content-end">
    <Link class="nav-link ms-5" href="##">About Us</Link>
      <Link class="nav-link ms-5" href="##">Gallery</Link>
      <Link class="nav-link ms-5" to="/Order/orders">Orders</Link>
      <Link class="nav-link ms-5" to="/dashboard/Dashboard">Dashboard</Link>
      <Link class="nav-link ms-5" to="/Admin">Admin</Link>
     <Link class="nav-link ms-5" to="/">Home</Link>
     <Link class="nav-link ms-5" to="/##">About Us</Link>
     <Link class="nav-link ms-5" to="/Login">Login</Link>

     
    </Nav>

  </Navbar.Collapse>
</Navbar>
      
           
      
    )
}
export default Navigation