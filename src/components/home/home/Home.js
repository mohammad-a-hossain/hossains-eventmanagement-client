import React from 'react'
import Blogg from '../Gallery/Gallery'
import Contact from '../contact/Contact'
import Doctor from '../doctor/Doctor'
import Footer from '../../Shared/Footer/Footer'
import Header from '../header/Header'
import Offer from '../Offer/Offer'
import Testimonial from '../testimonials/Testimonial'
import Packages from '../Packages/Packages'
import Gallery from '../Gallery/Gallery'

 const Home = () => {
    return (
        <div>
            <Header></Header>
             <Offer></Offer>
             <Packages></Packages>
            <Testimonial></Testimonial>
            <Gallery></Gallery>
           {/*  <Doctor></Doctor> */}
            <Contact></Contact>
            <Footer></Footer>  
        </div>
    )
}
export default Home