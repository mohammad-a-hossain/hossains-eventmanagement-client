import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react'


 const CardForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] =useState(null)
    const [paymentSuccess,setPaymentSuccess]=useState(null)

   const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
     } else {
       setPaymentSuccess(paymentMethod.id)
       setPaymentError(null)
       paymentSubmit(paymentMethod.id)
       console.log('[PaymentMethod]', paymentMethod);
     }
  };

  
    return (

        <div>
              <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
        </div>
    )
}
export default CardForm