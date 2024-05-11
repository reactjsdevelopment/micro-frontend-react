import * as React from 'react';
import './Pricing.scss';

export function Pricing({ pricingPlans, onPlanSelect, stripePublishableKey }) {
  return (
    <div className="pricing-table">
      {pricingPlans.data.map(({ id, interval, amount, product: { name } }) => {
        return (
          <div className="tier" key={id}>
            <h1>{name}</h1>
            <h4>
              ${amount / 100}/{interval}
            </h4>
            <button onClick={onPlanSelect(id)}>Get Started</button>
          </div>
        );
      })}
    </div>
  );
}
