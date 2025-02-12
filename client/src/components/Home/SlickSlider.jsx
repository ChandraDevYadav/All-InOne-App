import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const slides = [
        {
            title: "Premium Jacket",
            description: "High-quality leather jacket with modern design.",
            colors: ["bg-red-500", "bg-blue-500"],
            sizes: ["S", "M", "L", "XL"],
            price: "$120",
            discount: "20% Off",
            image: "/8.png", // Replace with actual image
        },
        {
            title: "Casual Sneakers",
            description: "Comfortable and stylish sneakers for everyday wear.",
            colors: ["bg-green-500", "bg-yellow-500"],
            sizes: ["6", "7", "8", "9"],
            price: "$80",
            discount: "10% Off",
            image: "/9.png", // Replace with actual image
        },
    ];

    return (
        <div className="">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg">
                        {/* Left Content */}
                        <div className="flex-1 space-y-4">
                            <h2 className="text-2xl font-bold">{slide.title}</h2>
                            <p className="text-gray-600">{slide.description}</p>
                            <div className="flex gap-2">
                                {slide.colors.map((color, i) => (
                                    <span key={i} className={`w-6 h-6 rounded-full ${color}`} />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                {slide.sizes.map((size, i) => (
                                    <span key={i} className="px-3 py-1 border rounded-lg text-sm">{size}</span>
                                ))}
                            </div>
                            <p className="text-xl font-semibold">{slide.price} <span className="text-red-500">{slide.discount}</span></p>
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Shop Now</button>
                        </div>

                        {/* Right Content (Image) */}
                        <div className="relative">
                            <img src={slide.image} alt={slide.title} className="w-60 h-60 object-cover rounded-lg shadow-md" />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                                {slide.colors.map((color, i) => (
                                    <span key={i} className={`w-4 h-4 rounded-full ${color} border`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickSlider;
