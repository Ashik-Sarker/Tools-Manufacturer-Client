import React from 'react';

const MyHome = () => {
    return (
        <div class=" myProfile grid">
            <div class="text-center flex items-center justify-around">
                <div>
                    <h1 class="text-5xl text-primary font-bold">Hello there</h1>
                    <h1 class=" mt-2 text-2xl text-primary font-bold">I AM ABU TAHER SARKER (ASHIK)</h1>
                    <h1 class=" mt-2 text-lg text-primary font-bold">Contact Me</h1>
                    <p className='text-primary'> <span>email: ashiksarker89@gmail.com</span> <br /> <span>Phone: +8801749 531677</span></p>
                </div>
                <div class="max-w-md">
                    <button class="btn bg-green-700 text-xl mt-8 px-12">Get In Touch</button>
                </div>
            </div>
        </div>
    );
};

export default MyHome;