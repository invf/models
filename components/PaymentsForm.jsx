import React, { useState } from 'react';
import axios from 'axios';
import styles from './payments.module.css';

function PaymentsForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('https://api.2checkout.com/rest/6.0/orders', {
      cardNum: cardNumber,
      expMonth: cardExpiry.split('/')[0],
      expYear: cardExpiry.split('/')[1],
      cvv: cardCvv,
      name: cardName,
      currency: 'USD',
      amount: 50.00, // replace with your desired payment amount
      paymentMethod: {
        type: 'EES_TOKEN_PAYMENT',
        paymentToken: 'your payment token here'
      }
    }, {
      auth: {
        username: 'your 2Checkout API key here',
        password: ''
      }
    });

    console.log(response);
  }

  return (
    <form type="post" id="payment-form">
  <div class="form-group">
    <label for="name" class="label control-label">Name</label>
    <input type="text" id="name" class="field form-control"></input>
  </div>

  <div id="card-element">
    {/* <!-- A TCO IFRAME will be inserted here. --> */}
  </div>

  <button class="btn btn-primary" type="submit">Generate token</button>
</form>
  );
}

export default PaymentsForm;
