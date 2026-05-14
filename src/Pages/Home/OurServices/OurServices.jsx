// import React from 'react';
import icon from '../../../assets/service.png'
const ourServices = [
    {
        icon: icon,
        titles: "Express  & Standard Delivery",
        description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
    },
    {
        icon: icon,
        titles: "Nationwide Delivery",
        description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
    },
    {
        icon: icon,
        titles: "Fulfillment Solution",
        description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
    },
    {
        icon: icon,
        titles: "Cash on Home Delivery",
        description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
    },
    {
        icon: icon,
        titles: "Corporate Service / Contract In Logistics",
        description: "Customized corporate services which includes warehouse and inventory management support."
    },
    {
        icon: icon,
        titles: "Parcel Return",
        description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
    },
]

const OurServices = () => {
    return (
        <section className="py-16 px-8 w-full mx-auto bg-accent rounded-3xl">
            <div className='text-center mb-10'>
                <h1 className='text-5xl text-white font-bold mb-5'>Our Services</h1>
                <p className='text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.

                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    ourServices.map((ourService, index) => (
                        <div key={index} className='rounded-3xl bg-[#FFFFFF] text-black p-10 hover:bg-primary text-center mb-7'>
                            <img src={ourService.icon} alt="" className=' mx-auto mb-5' />
                            <h2 className='font-bold text-3xl mb-5'>{ourService.titles}</h2>
                            <p className='text-neutral'>{ourService.description}</p>

                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default OurServices;