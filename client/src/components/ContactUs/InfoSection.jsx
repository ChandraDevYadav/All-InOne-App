import React from 'react'
import { PiPhoneCall } from "react-icons/pi";
import { BsEnvelope } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

const InfoSection = () => {
    return (
        <>
            <div className='grid grid-cols-3 gap-6'>
                <div className='p-12 bg-white'>
                    <div className='flex justify-center items-center'>
                        <div className='p-4 bg-gray-100 rounded-full'>
                            <IoLocationOutline className='text-red-400 text-4xl' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold py-4'>Address</h1>
                        <p className='text-gray-400 font-medium'>7 Green Lake Street Crawfordsville, <br /> IN 47933</p>
                    </div>
                </div>
                <div className='p-12 bg-white'>
                    <div className='flex justify-center items-center'>
                        <div className='p-4 bg-gray-100 rounded-full'>
                            <BsEnvelope className='text-red-400 text-4xl' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold py-4'>Email Us</h1>
                        <p className='text-gray-400 font-medium'>Indudus@gmail.com <br />helloyou@gmail.com</p>
                    </div>
                </div>
                <div className='p-12 bg-white'>
                    <div className='flex justify-center items-center'>
                        <div className='p-4 bg-gray-100 rounded-full'>
                            <PiPhoneCall className='text-red-400 text-4xl' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold py-4'>Call Now</h1>
                        <p className='text-gray-400 font-medium'>+1 800 123 456 789 <br />+1 800 123 654 987</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection