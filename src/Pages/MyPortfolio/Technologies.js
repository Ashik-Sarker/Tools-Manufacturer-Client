import React from 'react';

const Technologies = () => {
    return (
        <div className='technology md:h-screen md:pb-0 pb-8'>
            <h1 style={{letterSpacing:"5px"}} className='text-white text-3xl text-center py-8 font-bold'>TECHNOLOGIES AS A FULL STACK DEVELOPER</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 border-0 md:border p-4 mx-8 shadow-2xl gap-4 '>
                <div className='border p-4'>
                    <h1 className='text-white'>Front End Side</h1>
                        <li className='text-primary'>JS</li>
                        <li className='text-primary'>REACT JST</li>
                        <li className='text-primary'>HTML5</li>
                        <li className='text-primary'>CSS3</li>
                        <li className='text-primary'>BOOTSTRAP5</li>
                        <li className='text-primary'>TAILWIND</li>
                        <li className='text-primary'>REACT BOOTSTRAP</li>
                        <li className='text-primary'>DAISY UI</li>
                        <li className='text-primary'>REST APIS</li>
                </div>
                <div className='border p-4'>
                    <h1 className='text-white'> Back End Side</h1>
                        <li className='text-primary'>JS</li>
                        <li className='text-primary'>NODE JS</li>
                        <li className='text-primary'>NODE MONGODB</li>
                        <li className='text-primary'>NODE EXPRESS</li>
                        <li className='text-primary'>CREATE APIS</li>
                        <li className='text-primary'>FIREBASE</li>
                        <li className='text-primary'>JWT</li>
                        <li className='text-primary'>STRIPE</li>
                        <li className='text-primary'>HEROKU</li>
                </div>
            </div>
        </div>
    );
};

export default Technologies;