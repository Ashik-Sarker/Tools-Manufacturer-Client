import React from 'react';
import img1 from '../../Assets/powerComponent/img1.jpg'

const PowerThroughYourDay = () => {
    return (
        <div className='mt-32'>
            <div class="hero min-h-3/4">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img1} class="md:max-w-2xl min-h-3/4 rounded-lg" alt=''/>
                    <div className='px-8'>
                        <h1 class="text-5xl font-bold">Power Through Your Day</h1>
                        <p class="py-6">The 20V MAX* POWERCONNECT™ System powers a range of tools, vacuums, and lawn + garden equipment so you can tackle your to-do list in record time.</p>
                        <p><small>*Maximum initial battery voltage (measured without a workload) is 20 volts. Nominal voltage is 18.</small></p>
                        <button class="btn btn-primary mt-12">Discover POWERCONNECT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerThroughYourDay;