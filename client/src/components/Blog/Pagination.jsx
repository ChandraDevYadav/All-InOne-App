import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Pagination = () => {
    return (
        <div>
            <div className='flex justify-start items-center gap-4 my-10'>
                <button className='bg-blue-300 px-5 py-4 hover:bg-blue-600 hover:text-white'><FaAngleLeft /></button>
                <button className='bg-red-600 text-white px-6 py-3 font-medium hover:bg-blue-600 hover:text-white'>1</button>
                <button className='bg-blue-300 px-6 py-3 font-medium hover:bg-blue-600 hover:text-white'>2</button>
                <button className='bg-blue-300 px-6 py-3 font-medium hover:bg-blue-600 hover:text-white'>3</button>
                <button className='bg-blue-300 px-5 py-4 hover:bg-blue-600 hover:text-white'><FaAngleRight /></button>
            </div>
        </div>
    )
}

export default Pagination