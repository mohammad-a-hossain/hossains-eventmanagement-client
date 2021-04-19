import React from 'react'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from './CardForm';


const PaymentProcess = () => {
    const stripePromise = loadStripe('pk_test_51IeKQeJbXKqqM3ahCVPTywzcgkb51sWcVke2zyC9wNWuERUrzPu9Hx5Sn8LIOi3ncM1wmu3vwbTKzpuKn6ybBE3D00gfgMPSj0');

    return (
        <Elements stripe={stripePromise}>
       {/*   <CardForm  paymentSubmit={paymentSubmit} ></CardForm> */}
     <CardForm></CardForm>
    
      </Elements>
    )
}
export default PaymentProcess
