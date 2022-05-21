import React from 'react';
import banner1 from '../../Assets/Banner/banner1.jpg'
import banner2 from '../../Assets/Banner/banner2.jpg'
import banner3 from '../../Assets/Banner/banner3.jpg'
import banner4 from '../../Assets/Banner/banner-3.jpg'
import bigBanner1 from '../../Assets/Banner/bigBanner1.jpg'
import bigBanner2 from '../../Assets/Banner/bigBanner2.jpg'
import bigBanner3 from '../../Assets/Banner/bigBanner3.jpg'
import bigBanner4 from '../../Assets/Banner/bigBanner4.jpg'
import bigBanner5 from '../../Assets/Banner/bigBanner5.jpg'
import banner9 from '../../Assets/Banner/banner9.jpg'
import banner8 from '../../Assets/Banner/banner8.jpg'
import banner6 from '../../Assets/Banner/banner6.jpg'
import banner5 from '../../Assets/Banner/banner5.jpg'
const Banner = () => {
    return (
        <div class="carousel slide w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={banner9} class="w-full" alt='' /> / 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" class="carousel-item relative w-full">
                <img src={banner8} class="w-full" alt=''/> / 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" class="carousel-item relative w-full">
                <img src={banner6} class="w-full" alt=''/> / 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" class="carousel-item relative w-full">
                <img src={banner5} class="w-full" alt=''/> / 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;