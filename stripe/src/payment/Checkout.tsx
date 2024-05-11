import * as React from 'react';
import { useState } from 'react';
import './Pricing.scss';

// const {
//   CardElement,
//   StripeProvider,
//   Elements,
//   injectStripe,
// } = ReactStripeElements

class _CardForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={(e) => {
          const { stripe, setComplete } = this.props;
          e.preventDefault();
          stripe.createToken().then((payload) => {
            console.log(payload); //send this back to your server and create a subscription
            setComplete(payload);
          });
        }}
      >
        <CardElement />
        <button>Pay</button>
      </form>
    );
  }
}

const CardForm = injectStripe(_CardForm);

export function Checkout({ planId, setComplete }) {
  return (
    <div className="Checkout">
      <Elements>
        <CardForm setComplete={setComplete} planId={planId} />
      </Elements>
    </div>
  );
}
