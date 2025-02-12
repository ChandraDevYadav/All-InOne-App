import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const BlogButton = () => {
    return (
        <div>
            <div className='grid grid-cols-2 pb-8'>
                <div className='border border-gray-300 border-r-0 px-8 py-8'>
                    <div className="flex justify-start items-center">
                        <button className='flex justify-start items-center gap-4 hover:text-red-600 text-lg text-gray-700'><FaArrowLeft /> Previous Post</button>
                    </div>
                    <h1 className='mt-4 text-[17px] text-gray-800'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</h1>
                </div>
                <div className='border border-gray-300 px-8 py-8'>
                    <div className='flex justify-end items-center'>
                        <button className='flex justify-start items-center gap-4 hover:text-red-600 text-lg text-gray-700'>Next Post<FaArrowRight /></button>
                    </div>
                    <h1 className='text-end mt-4 text-[17px] text-gray-800'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</h1>
                </div>
            </div>
        </div>
    )
}

export default BlogButton