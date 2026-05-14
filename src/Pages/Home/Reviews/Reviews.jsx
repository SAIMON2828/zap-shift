// import React from 'react';
import 'swiper/css';
import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from './ReviewCard';
import customer from '../../../assets/customer-top.png'

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div className='mt-10'>
            <div className='text-center mb-10'>
                <img src={customer} alt="" className='mx-auto mb-4' />
                <div>
                    <h2 className='font-bold text-3xl text-black mb-4'>
                       What our customers are sayings
                    </h2>
                    <p className='text-neutral'>
                      Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                    </p>
                </div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 30,
                    stretch: "50%",
                    depth: 200,
                    scale:0.75,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review =>
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>



    );
};

export default Reviews;