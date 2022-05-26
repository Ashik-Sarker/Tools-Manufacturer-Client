import React from 'react';

const Education = () => {
    return (
        // <div class="h-screen education border">
        //     <div class="max-w-md grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        //         <div className='border'>
        //             <h1>Secondary School Certificate</h1>
        //         </div>
        //         <div className='border'>
        //             <h1>Secondary School Certificate</h1>
        //         </div>
        //     </div>
        // </div>
        <div className='education flex flex-col justify-center items-center'>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-white p-4" >
                <div class="card w-96 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-orange-400">S.S.C & H.S.C</h2>
                        <p>INSTITUTE: RAJSHAHI MODEL SCHOOL & COLLEGE</p>
                        <p>DEPARTMENT: SCIENCE</p>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal"></div> 
                <div class="card w-96 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-orange-400">BSC ENGINEERING</h2>
                        <p>INSTITUTE: UNITED INTERNATIONAL UNIVERSITY</p>
                        <p>DEPARTMENT: COMPUTER SCIENCE & ENGINEERING</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Education;