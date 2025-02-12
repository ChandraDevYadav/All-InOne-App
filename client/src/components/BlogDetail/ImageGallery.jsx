import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const ImageGallery = () => {
    // Image data with main images and carousel images
    const imageData = [
        {
            id: 1,
            mainImage: "/1.jpg",
            carouselImages: ["/sh1.jpg", "/sh2.jpg", "/sh5.jpg", "/sh4.jpg"]
        },
        {
            id: 2,
            mainImage: "/2.jpg",
            carouselImages: ["/MP1.png", "/MP2.png", "/MP5.png", "/MP6.png"]
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredId, setHoveredId] = useState(null); // Track hovered image

    // Open carousel
    const openCarousel = (images) => {
        setSelectedImages(images);
        setCurrentIndex(0);
        setIsOpen(true);
    };

    // Close carousel
    const closeCarousel = () => {
        setIsOpen(false);
    };

    // Handle previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
        );
    };

    // Handle next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Previews */}
            {imageData.map((item) => (
                <div
                    key={item.id}
                    className="relative w-full h-[300px] overflow-hidden"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <img
                        src={item.mainImage}
                        alt="Preview"
                        className={`w-full h-full object-cover transition-transform duration-300 ${hoveredId === item.id ? "scale-110" : "scale-100"
                            }`}
                    />

                    {/* View More Button */}
                    {hoveredId === item.id && (
                        <button
                            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300"
                            onClick={() => openCarousel(item.carouselImages)}
                        >
                            <span className="bg-white hover:text-red-600 text-black font-semibold px-6 py-2 rounded-md">
                                <FaEye className="text-2xl" />
                            </span>
                        </button>
                    )}
                </div>
            ))}

            {/* Carousel Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-4">
                        {/* Carousel Images */}
                        <div className="relative w-full h-[400px] flex items-center justify-center">
                            <div className="w-full h-full overflow-hidden rounded-lg">
                                <img
                                    src={selectedImages[currentIndex]}
                                    alt="Carousel Slide"
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                            </div>

                            {/* Previous Button */}
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                                onClick={prevSlide}
                            >
                                ❮
                            </button>

                            {/* Next Button */}
                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                                onClick={nextSlide}
                            >
                                ❯
                            </button>

                            {/* Dots Navigation */}
                            <div className="absolute bottom-4 flex space-x-2">
                                {selectedImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"
                                            }`}
                                        onClick={() => setCurrentIndex(index)}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md"
                            onClick={closeCarousel}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
