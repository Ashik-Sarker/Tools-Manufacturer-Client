import React from 'react';
import countries from '../../Assets/Icons/countries.png'
import project from '../../Assets/Icons/completeProject.png'
import happy from '../../Assets/Icons/happyClient.png'
import feedback from '../../Assets/Icons/feedback.png'

const BusinessSummary = () => {
    return (
        <div className='my-12 pt-8'>
            <div className='mt-16 flex flex-col items-center'>
                <h1 style={{letterSpacing:'10px'}} className='text-2xl md:text-4xl font-bold text-primary'>MILLIONS BUSINESS TRUST US</h1>
                <p className='md:text-xl my-2 text-accent'>TRY TO UNDERSTAND USERS EXPECTATION</p>
                <div className='flex gap-3'>
                    <div style={{height:"2px"}} className=' w-32 bg-green-600'></div>
                    <div style={{height:"2px"}} className=' w-16 bg-green-700'></div>
                    <div style={{height:"2px"}} className=' w-8 bg-green-900'></div>
                </div>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-4'>
                <div className='mx-auto'>
                    <div>
                    <img className='w-14' src={countries} alt="" />
                    </div>
                    <div className='mt-4 text-accent font-bold'>
                        <h1 className='text-3xl'>72</h1>
                        <p className='text-sm text-primary'>Countries</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div>
                    <img className='w-16' src={project} alt="" />
                    </div>
                    <div className='mt-4 text-accent font-bold'>
                        <h1 className='text-3xl'>535+</h1>
                        <p className='text-sm text-primary'>Complete Projects</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div>
                    <img className='w-20' src={happy} alt="" />
                    </div>
                    <div className='mt-4 text-accent font-bold'>
                        <h1 className='text-3xl'>273+</h1>
                        <p className='text-sm text-primary'>Happy Clients</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div>
                    <img className='w-16' src={feedback} alt="" />
                    </div>
                    <div className='mt-4 text-accent font-bold'>
                        <h1 className='text-3xl'>432+</h1>
                        <p className='text-sm text-primary'>Feedbacks</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="card card-side bg-base-100 w-3/4 md:w-2/4 mx-auto shadow-2xl my-16">
                    <div class="card-body flex justify-center items-center text-center">
                        <div>
                            <h2 class="card-title md:text-2xl text-primary max-w-24">Have any question about us or get a products request ?</h2>
                            <p className='md:text-xl'>Don't hesitate to contact us</p>
                        </div>
                        <div class="card-actions justify-end items-center mt-6">
                            <button class="btn btn-primary px-6 mx-2">Request For Quote</button>
                            <button class="btn btn-accent px-6 mx-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;