import React from 'react'
import { FaAngleDown, FaFacebookF, FaLinkedinIn, FaSearch, FaSkype, FaTwitter } from 'react-icons/fa'
import useCategory from '../../hooks/useCategory'
import { Link } from 'react-router-dom'

const Profile = () => {
    const categories = useCategory()
    return (
        <>
            <div className='bg-gray-300'>
                <div className='flex justify-center items-center pt-14'>
                    <img src="/MP6.png" alt="" className='w-40 h-40 rounded-full' />
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold py-4'>Linda Johns</h1>
                    <p className='text-gray-600 pb-6'>Hi! beautiful people. I`m an authtor of <br /> this blog. Read our post - stay with us</p>
                    <div className='flex justify-center items-center gap-4 pb-10'>
                        <div className="group p-3 rounded-full bg-white transition duration-300 hover:bg-cyan-600">
                            <FaFacebookF className="text-cyan-600 transition duration-300 group-hover:text-white" />
                        </div>

                        <div className='bg-white p-3 rounded-full group transition duration-300 hover:bg-black'>
                            <FaTwitter className='text-black transition duration-300 group-hover:text-white' />
                        </div>
                        <div className='bg-white p-3 rounded-full group transition duration-300 hover:bg-green-600'>
                            <FaSkype className='text-green-600 transition duration-300 group-hover:text-white' />
                        </div>
                        <div className='bg-white p-3 rounded-full group transition duration-300 hover:bg-blue-600'>
                            <FaLinkedinIn className='text-blue-600 transition duration-300 group-hover:text-white' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-16'>
                <div className='relative'>
                    <input type="text" placeholder='Search Post...' className='bg-red-200 border-none w-full py-6 px-4 rounded-md placeholder:text-gray-600 placeholder:font-medium' />
                    <div className='absolute top-3 rounded-md right-4 bg-red-400 text-white p-4'>
                        <FaSearch className='text-white text-xl' />
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <h1 className='text-2xl font-semibold'>Categories</h1>
                <div className='flex justify-start items-center gap-3 py-4'>
                    <div className='w-20 h-1 bg-red-600 rounded-full'></div>
                    <div className='w-full h-1 bg-gray-300 rounded-full'></div>
                </div>
                <div className="relative group">
                    <ul className="mt-2 w-full">
                        {categories?.map((c) => (
                            <li key={c.slug}>
                                <Link
                                    to={`/category/${c.slug}`}
                                    className="py-3 text-gray-800 hover:bg-gray-100 flex justify-between"
                                >
                                    <span>{c.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='pt-10'>
                <h1 className='text-2xl font-semibold'>Related Posts</h1>
                <div className='flex justify-start items-center gap-3 py-4'>
                    <div className='w-20 h-1 bg-red-600 rounded-full'></div>
                    <div className='w-full h-1 bg-gray-300 rounded-full'></div>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <div>
                        <img src="/MP1.png" alt="" className='w-28 h-16' />
                    </div>
                    <div>
                        <p className='text-lg font-medium text-gray-700'>Answers To Your Questions About.</p>
                        <p className='text-md font-medium text-gray-500'>19 Jun 2023</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-4 py-4'>
                    <div>
                        <img src="/MP2.png" alt="" className='w-28 h-16' />
                    </div>
                    <div>
                        <p className='text-lg font-medium text-gray-700'>Answers To Your Questions About.</p>
                        <p className='text-md font-medium text-gray-500'>19 Jun 2023</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <div>
                        <img src="/MP3.png" alt="" className='w-28 h-16' />
                    </div>
                    <div>
                        <p className='text-lg font-medium text-gray-700'>Answers To Your Questions About.</p>
                        <p className='text-md font-medium text-gray-500'>19 Jun 2023</p>
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <h1 className='text-2xl font-semibold'>Instagram</h1>
                <div className='flex justify-start items-center gap-3 py-4'>
                    <div className='w-20 h-1 bg-red-600 rounded-full'></div>
                    <div className='w-full h-1 bg-gray-300 rounded-full'></div>
                </div>
                <div className='grid grid-cols-3 justify-start items-center gap-4'>
                    <div>
                        <img src="/MP1.png" alt="" className='w-28 h-20' />
                    </div>
                    <div>
                        <img src="/MP2.png" alt="" className='w-28 h-20' />
                    </div>
                    <div>
                        <img src="/MP3.png" alt="" className='w-28 h-20' />
                    </div>
                    <div>
                        <img src="/MP4.png" alt="" className='w-28 h-20' />
                    </div>
                    <div>
                        <img src="/MP5.png" alt="" className='w-28 h-20' />
                    </div>
                    <div>
                        <img src="/MP6.png" alt="" className='w-28 h-20' />
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <h1 className='text-2xl font-semibold'>Tags</h1>
                <div className='flex justify-start items-center gap-3 py-4'>
                    <div className='w-20 h-1 bg-red-600 rounded-full'></div>
                    <div className='w-full h-1 bg-gray-300 rounded-full'></div>
                </div>
                <div className='grid grid-cols-3 justify-start items-center gap-4'>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>App</p>
                    </div>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>Fashiondary</p>
                    </div>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>Fashion</p>
                    </div>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>TagLogo</p>
                    </div>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>Designer</p>
                    </div>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>Popular</p>
                    </div>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>Shop</p>
                    </div>
                    <div className='bg-blue-200 text-black rounded-sm font-medium px-6 py-2 text-center'>
                        <p>Product</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile