import React from 'react'
import HeaderMain from '../headerMain/HeaderMain'
import Navigation from '../../Shared/navber/Navigation'
import  './header.css'

 const Header = () => {
    return (
        <div className='containerOne'>
        <Navigation></Navigation>
         <HeaderMain></HeaderMain>
        </div>
    )
}
export default Header