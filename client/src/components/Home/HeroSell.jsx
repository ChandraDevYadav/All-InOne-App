import React from 'react';

const HeroSell = () => {
    return (
        <div className="flex justify-end items-center min-h-screen relative">
            {/* Outer Circle */}
            <div className="w-[550px] h-[550px] border border-red-600 rounded-full flex justify-center items-center relative">
                {/* Inner Circle */}
                <div className="w-[500px] h-[500px] bg-white rounded-full flex justify-center items-center">
                </div>

            </div>
            <div className='flex justify-end items-center absolute inset-0'>
                <div className="">
                    <img
                        src="/8.png"
                        alt="Profile"
                        className="w-[1000px] h-[900px] object-contain rounded-full"
                    />
                </div>
            </div>
            <div className="absolute left-0">
                <div className='grid grid-cols-12'>
                    <div className='col-span-7'>
                        <h1>lorem100</h1>
                    </div>
                    <div className='col-span-5'></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSell;
