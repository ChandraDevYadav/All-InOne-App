import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="w-full h-96 bg-[url('/page-title-s2.jpg')] bg-cover bg-center bg-black relative">
                <div className='absolute inset-0 bg-black opacity-35 z-40 flex flex-col justify-center items-center'>
                    <h1 className='text-white text-5xl font-bold'>Blog</h1>
                    <div className='flex justify-start items-center gap-4 mt-4'>
                        <Link to='/' className='text-white text-lg font-medium hover:text-blue-900'>Home</Link>
                        <p className='text-white text-lg font-medium flex justify-start gap-4 items-center'><div className='w-2 h-2 bg-white rounded-full'></div> Blog</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero