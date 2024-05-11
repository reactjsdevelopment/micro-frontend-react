import * as React from 'react';
import { useState } from 'react';
import { Checkout } from './Checkout';
import { Pricing } from './Pricing';

export default function Payment() {
  const [checkoutPlan, setCheckoutPlan] = useState(null);
  const [complete, setComplete] = useState(false);

  const stripePublicKey = 'pk_test_lfk7VEvgFhqpmd9EFSrbRKVJ00tuCe7h59';

  return (
    <div>
      <Pricing
        onPlanSelect={(plan_id) => () => {
          console.log('render checkout for ' + plan_id);
        }}
        pricingPlans={examplePlansPayload}
        stripePublishableKey="asdasd"
      />


   {/* if (complete) {
     return <h1>Card Token - {complete.token.id}</h1>;
   } else if (checkoutPlan) {
     return (
       <StripeProvider apiKey={stripePublicKey}>
         <Checkout setComplete={setComplete} plan={checkoutPlan} />
       </StripeProvider>
     );
   } else {
     return (
       <Pricing
         onPlanSelect={(planId) => () => {
           setCheckoutPlan(planId);
         }}
         pricingPlans={examplePlansPayload}
         stripePublishableKey={undefined}
       />
     );
   }  */}
    </div>
  );
}

const examplePlansPayload = {
  object: 'list',
  data: [
    {
      id: 'plan_FwyicZBCJq9Uhz',
      object: 'plan',
      active: true,
      aggregate_usage: null,
      amount: 5000,
      amount_decimal: '5000',
      billing_scheme: 'per_unit',
      created: 1570487589,
      currency: 'usd',
      interval: 'month',
      interval_count: 1,
      livemode: false,
      metadata: {},
      nickname: null,
      product: {
        id: 'prod_FwyiuhfWdtFUou',
        object: 'product',
        active: true,
        attributes: [],
        caption: null,
        created: 1570487589,
        deactivate_on: [],
        description: null,
        images: [],
        livemode: false,
        metadata: {},
        name: 'AcmeBot Basic',
        package_dimensions: null,
        shippable: null,
        statement_descriptor: null,
        type: 'service',
        unit_label: null,
        updated: 1570487589,
        url: null,
      },
      tiers: null,
      tiers_mode: null,
      transform_usage: null,
      trial_period_days: null,
      usage_type: 'licensed',
    },
    {
      id: 'plan_FwyijZeEarmyyv',
      object: 'plan',
      active: true,
      aggregate_usage: null,
      amount: 30000,
      amount_decimal: '30000',
      billing_scheme: 'per_unit',
      created: 1570487589,
      currency: 'usd',
      interval: 'month',
      interval_count: 1,
      livemode: false,
      metadata: {},
      nickname: null,
      product: {
        id: 'prod_Fwyi4n2KOrU4U2',
        object: 'product',
        active: true,
        attributes: [],
        caption: null,
        created: 1570487589,
        deactivate_on: [],
        description: null,
        images: [],
        livemode: false,
        metadata: {},
        name: 'AcmeBot Premium',
        package_dimensions: null,
        shippable: null,
        statement_descriptor: null,
        type: 'service',
        unit_label: null,
        updated: 1570487589,
        url: null,
      },
      tiers: null,
      tiers_mode: null,
      transform_usage: null,
      trial_period_days: null,
      usage_type: 'licensed',
    },
  ],
  has_more: false,
  url: '/v1/plans',
};
