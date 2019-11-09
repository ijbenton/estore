import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import waveIcon from '../../assets/wave.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_z5SStrp1RjcrhtPQ7IaQ35ri00NL13JbhU';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="eStore Clothing Co."
      billingAddress
      shippingAddress
      image={waveIcon}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
