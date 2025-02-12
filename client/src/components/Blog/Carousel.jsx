import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const slides = [
    { id: 1, image: "/sh1.jpg" },
    { id: 2, image: "/sh2.jpg" },
    { id: 3, image: "/sh5.jpg" },
    { id: 4, image: "/sh4.jpg" }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative pb-12">
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={slides[currentIndex].image}
                    alt="Slide"
                    className="w-full h-[500px] object-fill transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* Prev Button */}
            <button
                className="absolute left-4 top-[35%] transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 hover:text-blue-600"
                onClick={prevSlide}
            >
                ❮
            </button>

            {/* Next Button */}
            <button
                className="absolute right-4 top-[35%] transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 hover:text-blue-600"
                onClick={nextSlide}
            >
                ❯
            </button>
            <div>
                <div className='flex justify-start items-center gap-6 py-8'>
                    <div className='flex justify-start items-center gap-2'>
                        <FaUser className='text-gray-600' />
                        <p className='text-lg text-gray-600'>By Jenny Watson</p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <div className='w-2 h-2 rounded-full bg-red-600'></div>
                        <p className='text-lg text-gray-600'>Comments 35</p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <div className='w-2 h-2 rounded-full bg-red-600'></div>
                        <p className='text-lg text-gray-600'>24 Jun 2023</p>
                    </div>
                </div>
                <p className='text-4xl font-bold pb-4'>Best Social Media Marketing..</p>
                <p className='font-medium text-gray-600 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className='text-gray-700 text-lg hover:text-red-600'>READ MORE...</Link>
            </div>

            {/* Dots Navigation */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default Carousel;
