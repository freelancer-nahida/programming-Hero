import React from 'react';
import { use } from "react";

import PricingCard from '../component/pricingCard/PricingCard';
import DaisyPricing from '../component/DaisyPricing/DaisyPricing';
const PricingOption = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)

   
    
    return (
    <div>

    
        <h2 className='text-5xl'>Get our  Membership </h2>
        <div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {
              pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map( pricing => <DaisyPricing key={pricing.id}
                        pricing={pricing}></DaisyPricing>)
                }
        </div>
            </div>
    );
};

export default PricingOption;