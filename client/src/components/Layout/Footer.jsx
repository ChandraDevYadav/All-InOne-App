import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white p-6'>
            <h1 className='text-center text-3xl'>All Right Reserved &copy; ChandraDev</h1>
            <p className='text-center mt-4 text-sm'>
                <Link to='/about' className='text-white hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600 pr-4'>About</Link>
                <Link to='/contact' className='text-white hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600 px-4 border-l-2 border-white border-r-2'>Contact</Link>
                <Link to='/policy' className='text-white hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600 pl-4'>Privacy Policy</Link>
            </p>
        </div>
    )
}

export default Footer