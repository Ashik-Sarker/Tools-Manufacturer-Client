import React from 'react';

const MyProjects = () => {
    return (
        <div className = 'projects p-8 ' >
            <h1 className='text-white text-3xl mb-8 text-center'>HERE IS MY THREE BEST PROJECTS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-primary'>

                <div class="card border-2 border-secondary shadow-xl">
                    {/* <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure> */}
                    <div class="card-body">
                        <h2 class="card-title text-3xl">Bikers Ware House</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a href="https://bikers-warehouse.web.app/">Go Live</a></button>
                        </div>
                    </div>
                </div>
                <div class="card border-2 border-secondary shadow-xl">
                    {/* <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure> */}
                    <div class="card-body">
                        <h2 class="card-title text-3xl">Twinkle Kitchen</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a href="https://pro-developer-357f4.web.app/">Go Live</a></button>
                        </div>
                    </div>
                </div>
                <div class="card border-2 border-secondary shadow-xl">
                    {/* <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure> */}
                    <div class="card-body">
                        <h2 class="card-title text-3xl">Best-Tools-Manufacturers</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a href="https://pro-developer-357f4.web.app/">Go Live</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProjects;