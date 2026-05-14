// import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import HowItWorks from '../HowItWorks,/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Reviews from '../Reviews/Reviews';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json());

const Home = () => {
    return (
        <div className='mt-10'>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <Brands></Brands>
           <ServiceDetails></ServiceDetails>
           <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;