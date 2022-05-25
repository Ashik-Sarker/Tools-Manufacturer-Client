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
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    return (
        <div className='mt-32 mb-24 p-8'>
            <h1 style={{letterSpacing:'5px'}} className='text-4xl text-primary font-bold mb-16'>What Our Clients Says?</h1>
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
                            slidesPerView: 3,
                        },
                    }
                 }
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={30}
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
                            <div class="card card-compact shadow-lg p-2">
                            {/* <figure><img className='w-20 rounded-full' src={user.img} alt="Shoes" /></figure> */}
                            <div class="card-body text-center">
                                <p className='text-lg'>{user.customerName}<small> ({user.profession})</small></p>
                                <p>Product Name: {user.productName} <small>({user.ratings})</small></p>
                                <small>{user.opinions}</small>
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