import React from 'react'
import Contact from '../contact/Contact'
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
            <Contact></Contact>
            <Footer></Footer>  
        </div>
    )
}
export default Home