import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='px-24 bg-white'>
            <div className="bg-[url('/banner-bg.jpg')] bg-cover bg-no-repeat py-20 grid grid-cols-2">
                <div>
                    <h1 className='text-9xl text-gray-300 font-bold text-center'>Fashion</h1>
                    <h1 className='text-5xl text-center font-bold text-gray-700'>Stylish casual <br /> sweater & sneakers</h1>
                    <p className='text-xl my-5 text-center font-medium tracking-widest'>Beautiful, Fashionable and Stylish</p>
                    <div className='flex justify-center items-center'>
                        <Link to='/shop' className='text-red-500 border-b-2 border-red-500 font-semibold text-xl'>Shop Now</Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Banner