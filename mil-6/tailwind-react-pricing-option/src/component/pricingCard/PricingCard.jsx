import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {

    const {name ,price, description , features} = pricing;
    
    
    return (
      

            <div className="flex flex-col border bg-blue-500  rounded-2xl p-4">
                {/* card header */}
                <div>
                    <div className="text-7xl">{name}</div>
                    <div className="text-3xl">{price}</div>
                </div>
                 {/* card body */}
                 <div className='p-4 bg-pink-500 rounded-2xl m-4 flex-1'>
                    <p>{description}</p>
                    {
                        features.map((feature,index )=>  <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                    }
                 </div>
                    
            <button className="btn w-full mt-4">Subscribe</button>
            </div>
    );
};

export default PricingCard;

