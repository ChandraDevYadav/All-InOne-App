import React from 'react'
import Card from './Card'
import Carousel from './Carousel'
import Pagination from './Pagination'
import Profile from './Profile'

const MainSection = () => {
    return (
        <div className='px-24 pt-12'>
            <div className='grid grid-cols-6 gap-20'>
                <div className='col-span-4'>
                    <Carousel />
                    <Card />
                    <Pagination />
                </div>
                <div className='col-span-2'>
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default MainSection