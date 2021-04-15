 import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './info.css'


 const CardInfo = () => {
    return (
        <div className={`card col-md-4 m-4 text-white p-4 `}>
        <div className='d-flex'>
          <div>
          <FontAwesomeIcon className='info-icon' />
          </div>
          <div>
         <h6>22</h6>
         <small>hghgh </small> 
          </div>
          </div>
    </div>
    )
}
export default CardInfo

//<FontAwesomeIcon icon={faCoffee} /> */