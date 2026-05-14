// import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import amazonVector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import startPeople from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';


const brandsLogos = [amazon, amazonVector, casio, moonstar, randstad, star, startPeople];

const Brands = () => {
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay:1000,
                disableOnInteraction: false,
            }}
             modules={[Autoplay]}
            className='mt-10 mb-10'

        >
            {
                brandsLogos.map((logo, index) =>
                    <SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>)
            }

        </Swiper>
    );
};

export default Brands;