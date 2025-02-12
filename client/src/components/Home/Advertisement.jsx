import React from 'react'
import { Link } from 'react-router-dom'

const Advertisement = () => {
    return (
        <div className='px-24 py-8'>
            <div className="grid grid-cols-2 gap-6">
                <div className='relative'>
                    <div className='w-full h-full overflow-hidden'>
                        <img src="/lookbook.jpg" alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
                    </div>
                    <div className='absolute top-[55%] right-6'>
                        <h1 className='text-4xl font-bold pb-6 text-white'>LOOKBOOK 2025</h1>
                        <p className='font-medium text-white text-lg pb-4'>Best fasionable brand in the world</p>
                        <div className='flex justify-end'>
                            <Link to='/shop' className='text-red-500 bg-white hover:bg-red-600 hover:text-white px-10 py-4 font-bold text-xl'>View Collection</Link>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='w-full h-full overflow-hidden'>
                        <img src="/winter.jpg" alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
                    </div>
                    <div className='absolute top-[5%] left-6'>
                        <h1 className='text-xl font-medium pb-2 text-white'>Winter Sale</h1>
                        <p className='font-bold text-white text-4xl pb-4'>UP TO 70% OFF</p>
                        <div className='flex justify-start'>
                            <Link to='/shop' className='text-white bg-red-600 hover:text-red-600 hover:bg-white px-10 py-4 font-bold text-xl'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertisement