import React from 'react';
import './PowerTools.css';

const PowerTools = () => {
    return (
        <div className='header mt-28'>
            <p className='text-center pt-20 text-green-700 text-5xl font-bold'>POWER TOOLS</p>
            < div className = 'flex flex-col items-center mt-12' >
                <input type="text" placeholder="Type here Name" class="input input-bordered input-md w-full max-w-xs" /><br />
                <input type="text" placeholder="Type here Email" class="input input-bordered input-md w-full max-w-xs" /><br />
                <input type="text" placeholder="Type here Phone Number" class="input input-bordered input-md w-full max-w-xs" /><br />
                <button className='btn btn-primary text-lg font-bold w-full max-w-xs'>Stay with Us --</button>
            </div>
            
        </div>
    );
};

export default PowerTools;