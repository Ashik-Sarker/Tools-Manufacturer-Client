import React, { useEffect, useState } from 'react';
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('customerReview.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    return (
        <div className='mt-32 mb-24 p-8'>
            <h1 className='text-4xl text-primary font-bold mb-16'>What Our Clients Says?</h1>
            <Swiper
                 breakpoints = {
                    {
                        // when window width is >= 640px
                         640:{
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                         768:{
                            width: 768,
                            slidesPerView: 2,
                        },
                    }
                 }
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    reviews.map(user => (
                        <SwiperSlide key={user._id} className="mb-12">
                            <div class="card card-compact bg-base-100 shadow-xl bg-green-100 p-4">
                            <figure><img className='w-24' src={user.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{user.name}</h2>
                                <p>{user.review}</p>
                                <p>Ratings: 5</p>
                            </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Review;