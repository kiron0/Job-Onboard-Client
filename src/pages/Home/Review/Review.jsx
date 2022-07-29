import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './Review.css'
import { FreeMode } from 'swiper';
import ReviewInfo from './ReviewInfo';

const Review = () => {

  const reviews = [
    {
        "_id": 1,
        "name": "Boundless Brilliance",
        "reviewDetails": "We use Job Onboard to reach out to the thousands of remote professionals. Thanks to the rich set of tools, the entire recruiting and work process  an be done in one place which is very convenient.",
        "img": "",
        "location": "Ft Lauderdale, FL, United State"
    },
    {
        "_id": 2,
        "name": "Volunteer Assistance to the Vulnerable",
        "reviewDetails": "Job Onboard has been a wonderful organization to work with; they are very clear with their communication, have a user friendly website and a great willingness to support our organization.",
        "img": "",
        "location": "Van Nuys, CA, United States"
    },
    {
        "_id": 3,
        "name": "Dance for all Bodies",
        "reviewDetails": "Job Onboard has connected Boundless Brilliance with volunteers acroll the world who share our passion of empowering students in STEM. The Job Onboard team is a pleasure to work with and the platform is very convenient and easy to use.",
        "img": "",
        "location": "New York, NY, United States"
    },
    {
        "_id": 4,
        "name": "Job seekers",
        "reviewDetails": "Job Onboard has connected Boundless Brilliance with volunteers acroll the world who share our passion of empowering students in STEM. The Job Onboard team is a pleasure to work with and the platform is very convenient and easy to use.",
        "img": "",
        "location": "London, NY, United States"
    }
  ]
  
  return (
    <div className='px-5 md:px-0 container mx-auto'>
      <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                freeMode={false}

                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <div className="user_reviews">
          {
            reviews.map((review)=> (
              <SwiperSlide>
                <ReviewInfo review = {review} />
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  );
};

export default Review;