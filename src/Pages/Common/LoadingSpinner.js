import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            {/* <div class="flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
        <div class="flex items-center justify-center ">
            <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div> */}
            <div class="flex items-center justify-center h-screen">
                <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;