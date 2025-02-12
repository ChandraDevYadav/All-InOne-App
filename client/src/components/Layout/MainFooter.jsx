import React from 'react'
import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaSkype, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MainFooter = () => {
    return (
        <div className='px-24 py-20'>
            <div className="grid grid-cols-7 gap-2">
                <div className='col-span-2'>
                    <div className='flex justify-start items-center gap-4'>
                        <img src="/online-shop.png" alt="" className='w-12 h-12' />
                        <h1 className='font-bold text-3xl'>All-In-One</h1>
                    </div>
                    <p className='pr-12 mt-4 font-medium text-gray-700'>Mattis inelit neque quis donecyir eleng amet. Amet sed et cursus eu euiod. Egestaerets in morbiet tristique ornare vulputate vitae enim.</p>
                    <div className='flex justify-start items-center gap-4 mt-4'>
                        <div className="group p-4 rounded-full bg-white transition duration-300 hover:bg-cyan-600">
                            <FaFacebookF className="text-cyan-600 transition duration-300 group-hover:text-white" />
                        </div>

                        <div className='bg-white p-4 rounded-full group transition duration-300 hover:bg-black'>
                            <FaTwitter className='text-black transition duration-300 group-hover:text-white' />
                        </div>
                        <div className='bg-white p-4 rounded-full group transition duration-300 hover:bg-green-600'>
                            <FaSkype className='text-green-600 transition duration-300 group-hover:text-white' />
                        </div>
                        <div className='bg-white p-4 rounded-full group transition duration-300 hover:bg-blue-600'>
                            <FaLinkedinIn className='text-blue-600 transition duration-300 group-hover:text-white' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-xl font-bold mb-4'>Info Section </h1>
                    <p className='flex flex-col'>
                        <Link to='/about' className='text-gray-600 hover:text-blue-600 text-md font-medium'>About</Link>
                        <Link to='/contact' className='text-gray-600 hover:text-blue-600 py-2 text-md font-medium'>Contact</Link>
                        <Link to='/policy' className='text-gray-600 hover:text-blue-600 text-md font-medium'>Privacy Policy</Link>
                        <Link to='/policy' className='text-gray-600 hover:text-blue-600 py-2 text-md font-medium'>Blogs</Link>
                        <Link to='/policy' className='text-gray-600 hover:text-blue-600 text-md font-medium'>Profile</Link>
                    </p>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-xl font-bold mb-5'>Blog Post</h1>
                    <div className='flex justify-start items-center gap-4'>
                        <img src="/ln1.jpg" alt="" className='w-32 h-16 object-fill' />
                        <div>
                            <p className='text-md font-medium text-gray-500'>It is a long established fact that a reader will be distracted.</p>
                            <p className='text-md font-medium text-gray-600'>12 December, 2023</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4 mt-4'>
                        <img src="/ln2.jpg" alt="" className='w-32 h-16 object-fill' />
                        <div>
                            <p className='text-md font-medium text-gray-500'>It is a long established fact that a reader will be distracted.</p>
                            <p className='text-md font-medium text-gray-600'>12 December, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-xl font-bold mb-5'>Newsletter</h1>
                    <div>
                        <p className='font-medium mb-2 text-gray-700'>Subscribe to our newsletter and get 10% off your first purchase.</p>
                        <input type="text" placeholder='Your Email Address.. ' className='border border-gray-600 px-4 py-3 w-full my-4' />
                        <button className='bg-red-500 text-white font-medium px-4 py-3 text-lg text-center w-full'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooter