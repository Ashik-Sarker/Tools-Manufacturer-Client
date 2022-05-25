import React from 'react';
import image from '../../Assets/error/404-pages.jpg'

const ErrorPage = () => {
    return (
        <div className='px-12'>
            <p className='text-8xl font-bold text-orange-600 my-12 text-center'>Page Not Found</p>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center my-24'>
                <div className='text-start ml-28'>
                    <h1><span className='text-8xl text-primary'>Ooops !</span> This is Error Page </h1>
                </div>
                <div>
                    <img src={image} alt="" srcset="" />
                    
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;