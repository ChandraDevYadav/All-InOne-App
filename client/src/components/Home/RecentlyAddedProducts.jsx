import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart, FaEye, FaExchangeAlt, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

const RecentlyAddedProducts = () => {
    const [products, setProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecentProducts = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/api/v1/product/recent");
                if (data.success) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.error("Error fetching recent products", error);
            }
        };

        fetchRecentProducts();
        // Load cart from localStorage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success("Item Added to cart");
    };

    return (
        <div className="p-28 bg-white">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-semibold text-gray-800">New Arrival</h2>
                <p className="my-2 text-lg text-gray-600">Here are our latest products that you may like.</p>
                <div className="bg-red-600 w-28 h-[3px] mb-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, visibleCount).map((p) => (
                    <div key={p._id} className="relative group">
                        <div className="relative overflow-hidden">
                            <img
                                src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                                alt={p.name}
                                className="object-fill w-full h-96 transition-transform duration-300 group-hover:scale-110"
                            />
                            <FaHeart className="absolute shadow-md top-2 right-2 w-6 h-6 text-red-600 hover:text-white" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => addToCart(p)}
                                        className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
                                    >
                                        <FaShoppingCart className="w-5 h-5" />
                                    </button>
                                    <button
                                        className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
                                        onClick={() => setSelectedProduct(p)}
                                    >
                                        <FaEye className="w-5 h-5" />
                                    </button>
                                    <Link to='/shop' className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                                        <FaExchangeAlt className="w-5 h-5" />
                                    </Link>
                                </div>
                                <button
                                    onClick={() => navigate(`/product/${p.slug}`)}
                                    className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-800 mt-2 text-center">{p.name}</h1>
                        <p className="text-xl text-red-600 font-medium text-center">$ {p.price}</p>
                    </div>
                ))}
            </div>

            {visibleCount < products.length && (
                <div className="text-end mt-4">
                    <Link
                        to="/shop"
                        className="text-blue-600 font-medium hover:border-b-2 hover:border-blue-800 hover:pb-2 hover:text-blue-800"
                    >
                        See More
                    </Link>
                </div>
            )}

            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ✖
                        </button>
                        <img
                            src={`http://localhost:8080/api/v1/product/product-photo/${selectedProduct._id}`}
                            alt={selectedProduct.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h2>
                        <p className="text-gray-700">{selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecentlyAddedProducts;
