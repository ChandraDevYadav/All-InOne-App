import React, { useState } from "react";
import { FaExchangeAlt, FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SellersList = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [selectedSeller, setSelectedSeller] = useState(null);

    // Sellers array
    const sellers = [
        {
            _id: "1",
            name: "John's Electronics",
            photo: "/bs1.png",
            price: "$ 2500",
        },
        {
            _id: "2",
            name: "Fresh Mart",
            photo: "/bs2.png",
            price: "$ 1500",
        },
        {
            _id: "3",
            name: "Tech Haven",
            photo: "/bs3.png",
            price: "$ 3500",
        },
        {
            _id: "4",
            name: "Fashion Hub",
            photo: "/bs4.png",
            price: "$ 4100",
        },
    ];

    const openDialog = (seller) => {
        setSelectedSeller(seller);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
        setSelectedSeller(null);
    };

    return (
        <div className="p-28 bg-white">
            {/* Section Title */}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-semibold text-gray-800">Top Sellers</h2>
                <p className="my-3 text-lg text-gray-600">Discover our top-rated sellers</p>
                <div className="bg-red-600 w-28 h-[3px] mb-12 mt-2"></div>
            </div>

            {/* Sellers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sellers.map((seller) => (
                    <div key={seller._id} className="relative group">
                        <div className="relative overflow-hidden">
                            <img
                                src={seller.photo}
                                alt={seller.name}
                                className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex space-x-3">
                                    <button
                                        className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
                                    >
                                        <FaShoppingCart className="w-5 h-5" />
                                    </button>
                                    <button
                                        className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
                                        onClick={() => openDialog(seller)}
                                    >
                                        <FaEye className="w-5 h-5" />
                                    </button>
                                    <Link to='/shop' className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                                        <FaExchangeAlt className="w-5 h-5" />
                                    </Link>
                                </div>
                                <Link
                                    to='/shop'
                                    className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Shop Now
                                </Link>
                            </div>
                            <FaHeart className="text-red-600 absolute top-2 right-2 text-2xl" />
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-800 mt-2 text-center">{seller.name}</h1>
                        <p className="text-xl text-gray-600 font-medium text-center">{seller.price}</p>
                    </div>
                ))}
            </div>

            {/* Dialog for seller details */}
            {showDialog && selectedSeller && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                        <h2 className="text-2xl font-semibold mb-4">Seller Details</h2>
                        <img
                            src={selectedSeller.photo}
                            alt={selectedSeller.name}
                            className="object-cover w-full h-40 mb-4 rounded-md"
                        />
                        <p className="text-xl font-semibold">{selectedSeller.name}</p>
                        <p className="text-lg text-gray-600">{selectedSeller.price}</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={closeDialog}
                                className="text-white bg-red-600 px-4 py-2 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SellersList;
