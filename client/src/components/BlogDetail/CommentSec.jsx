import React from 'react'
import { Link } from 'react-router-dom'

const CommentSec = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>5 Comments</h1>
            <div className='flex justify-start items-start gap-8 border-b border-gray-300 py-10 mb-4'>
                <div className=''>
                    <img src="/bs2.png" alt="" className='w-16 h-16 rounded-full' />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Chan Dra Dev <span className='text-sm font-medium  text-gray-600'>Jul 21, 2023 at 10:00am</span></h1>
                    <p className='leading-relaxed text-md text-gray-700 my-4'>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain <br /> was born and I will give you a complete account of the system</p>
                    <Link to='' className='border-b border-black hover:border-red-600 pb-1 hover:text-red-600'>REPLY</Link>
                </div>
            </div>
            <div className='flex justify-start items-start gap-8 border-b border-gray-300 py-10 mb-4 ml-20'>
                <div className=''>
                    <img src="/bs3.png" alt="" className='w-16 h-16 rounded-full' />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Bik Ram <span className='text-sm font-medium  text-gray-600'>Jul 21, 2023 at 10:00am</span></h1>
                    <p className='leading-relaxed text-md text-gray-700 my-4'>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain <br /> was born and I will give you a complete account of the system</p>
                    <Link to='' className='border-b border-black hover:border-red-600 pb-1 hover:text-red-600'>REPLY</Link>
                </div>
            </div>
            <div className='flex justify-start items-start gap-8 border-b border-gray-300 py-10 mb-4 ml-28'>
                <div className=''>
                    <img src="/bs4.png" alt="" className='w-28 h-16 rounded-full' />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Ganesh Dahal <span className='text-sm font-medium  text-gray-600'>Jul 21, 2023 at 10:00am</span></h1>
                    <p className='leading-relaxed text-md text-gray-700 my-4'>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                    <Link to='' className='border-b border-black hover:border-red-600 pb-1 hover:text-red-600'>REPLY</Link>
                </div>
            </div>
            <div className='flex justify-start items-start gap-8 py-10 mb-4 pl-16'>
                <div className=''>
                    <img src="/bs2.png" alt="" className='w-24 h-16 rounded-full' />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Robert Sonny <span className='text-sm font-medium  text-gray-600'>Jul 21, 2023 at 10:00am</span></h1>
                    <p className='leading-relaxed text-md text-gray-700 my-4'>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                    <Link to='' className='border-b border-black hover:border-red-600 pb-1 hover:text-red-600'>REPLY</Link>
                </div>
            </div>
        </div>
    )
}

export default CommentSec