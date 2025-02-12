import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
    // Carousel Data
    const carouselData = [
        {
            id: 1,
            title: "Sneakers For Women ",
            description: "High-quality sneakers with modern design which is available in various colors and sizes with exclusive discount.",
            colors: ["bg-red-500", "bg-blue-500", "bg-green-600", "bg-yellow-400", "bg-white"],
            sizes: ["S", "M", "L", "XL"],
            price: "$120",
            discount: "20% Off",
            image: "/8.png",
        },
        {
            id: 2,
            title: "Shoes For Women",
            description: "High-quality sneakers with modern design which is available in various colors and sizes with exclusive discount.",
            colors: ["bg-red-500", "bg-blue-500", "bg-green-600", "bg-yellow-400", "bg-white"],
            sizes: ["S", "M", "L", "XL"],
            price: "$80",
            discount: "10% Off",
            image: "/9.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
        }, 5000); // Adjusted to 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full z-30">
            {/* Carousel Wrapper */}
            <div className="relative overflow-hidden rounded-lg">
                {carouselData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`relative transition-opacity duration-700 ${index === currentIndex ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex justify-end items-center min-h-screen relative">
                            {/* Outer Circle */}
                            <div className="w-[550px] h-[550px] border border-red-600 rounded-full flex justify-center items-center relative">
                                {/* Inner Circle */}
                                <div className="w-[500px] h-[500px] bg-white rounded-full flex justify-center items-center">
                                </div>

                            </div>
                            <div className='flex justify-end items-center absolute inset-0'>
                                <div className="">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-[1000px] h-[800px] object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-start justify-center pl-32">
                                <h2 className="text-6xl font-medium pr-24">{slide.title}</h2>
                                <p className="text-xl py-4 whitespace-pre-line">
                                    {slide.description.split(' ').map((word, i) => (i % 10 === 9 ? word + '\n' : word)).join(' ')}
                                </p>
                                <div className="flex justify-between items-start gap-32">
                                    <div>
                                        <p className="text-xl font-medium mb-1 text-gray-600">Price:</p>
                                        <p className="text-2xl font-semibold text-gray-700">{slide.price}</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-medium mb-3 text-gray-600">Colors:</p>
                                        <div className="flex gap-3 mt-1">
                                            {slide.colors.map((color, i) => (
                                                <input key={i} type="checkbox" className={`w-5 h-5 rounded-full ${color}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xl font-medium mb-3 text-gray-600">Sizes</p>
                                        <div className="flex gap-3">
                                            {slide.sizes.map((size, i) => (
                                                <span key={i} className="px-4 py-2 bg-white text-gray-400 rounded-lg text-md font-medium">{size}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center gap-6 mt-6">
                                    <button className="text-gray-700 border-2 border-gray-500 font-medium text-xl px-8 py-3 rounded-lg">{slide.discount}</button>
                                    <Link to='/shop' className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-medium text-lg">Shop Now</Link>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>

            {/* Indicators */}
            {/* <div className="flex justify-end mt-4 space-x-2">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-8 h-8 text-center flex-row rounded-full border ${index === currentIndex ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div> */}
        </div>
    );
};

export default Carousel;
