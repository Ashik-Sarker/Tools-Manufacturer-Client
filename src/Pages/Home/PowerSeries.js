import React from 'react';
import img2 from '../../Assets/powerComponent/img2.jpg'

const PowerSeries = () => {
    return (
        <div className='mx-8'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img2} class="max-w-2xl min-h-3/4 rounded-lg" alt=''/>
                    <div className='px-8'>
                        <h3>Multiple floor types? No problem.</h3>
                        <h1 class="text-5xl font-bold">POWERSERIES™ Extreme™</h1>
                        <p class="py-6">3-speed control lets you choose the power level for hard surfaces, area rugs, or powerful pick-up on carpet.</p><br />
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerSeries;