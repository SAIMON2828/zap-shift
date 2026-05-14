// import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import safeDelivary from '../../../assets/safe-delivery.png';

const services = [
    {
        icon: liveTracking,
        title:"Live Parcel Tracking",
        description:"Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
     {
        icon: safeDelivary,
        title:"100% Safe Delivery",
        description:"We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
     {
        icon: safeDelivary,
        title:"24/7 Call Center Support",
        description:"Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    },
]

const ServiceDetails = () => {
    return (
        <section>
            <div className='flex flex-col gap-10'>
                {
                    services.map((service, index)=><div key={index} className='flex items-center p-10 bg-[#FFFFFF] rounded-2xl'>
                       <div>
                          <img src={service.icon} alt="" />
                       </div>
                        <div className='border-l-2 border-dashed mx-10 p-10'>
                            <h2 className='font-bold mb-5'>{service.title}</h2>
                            <p className='text-neutral'>{service.description}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    );
};

export default ServiceDetails;