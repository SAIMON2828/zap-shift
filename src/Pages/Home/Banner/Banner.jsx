// import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <div className="relative">
                <img src={bannerImg1} />
                <div className="absolute bottom-10 left-10 flex gap-4">
                    <button className="btn btn-active btn-success bg-primary rounded-4xl">Track Your Parcel  <MdArrowOutward />
                    </button>
                   
                    <button className="btn btn-outline btn-success">Be a Rider</button>
                </div>

            </div>
            <div className="relative">
                <img src={bannerImg2} />
                <div className="absolute bottom-10 left-10 flex gap-4">
                    <button className="btn btn-active btn-success bg-primary rounded-4xl">Track Your Parcel  <MdArrowOutward />
                    </button>
                   
                    <button className="btn btn-outline btn-success">Be a Rider</button>
                </div>

            </div>
            <div className="relative">
                <img src={bannerImg3} />
                <div className="absolute bottom-10 left-10 flex gap-4">
                    <button className="btn btn-active btn-success bg-primary rounded-4xl">Track Your Parcel  <MdArrowOutward />
                    </button>
                   
                    <button className="btn btn-outline btn-success">Be a Rider</button>
                </div>

            </div>
            {/* <div>
                <img src={bannerImg2} />

            </div>
            <div>
                <img src={bannerImg3} />

            </div> */}
        </Carousel>
    );
};

export default Banner;