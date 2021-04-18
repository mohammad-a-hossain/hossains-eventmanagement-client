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
  <Navbar.Brand href="#home"><Image src={logo} style={{height:'50px',width:'100px'}} thumbnail /> HOSSAIN'S</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav class="d-flex flex-wrap justify-content-end">
    <Link class="nav-link ms-5" href="##">About Us</Link>
      <Link class="nav-link ms-5" href="##">Gallery</Link>
      <Link class="nav-link ms-5" to="/Order/orders">Orders</Link>

      <Link class="nav-link ms-5" to="/dashboard/Dashboard">Dashboard</Link>
      <Link class="nav-link ms-5" to="/Admin">Admin</Link>

<Link class="nav-link ms-5" to="/##">About Us</Link>
<Link class="nav-link ms-5" to="/##">About Us</Link>

<Link class="nav-link ms-5" to="/Login">Login</Link>

     
    </Nav>
  {/*   <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
</Navbar>
       /*   <nav class="navbar navbar-expand-lg" variant="dark"> 
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link ms-5 active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5" to="/Login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-5" to="/##">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/##">Review</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/##">Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/##">Contact us</Link>
              </li>
            </ul>
          
          </div>
        </div>
       </nav>  */
            
      
    )
}
export default Navigation