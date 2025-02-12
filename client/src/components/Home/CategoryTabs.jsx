import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaEye, FaExchangeAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryTabs = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
                if (data.success) {
                    setCategories(data.category);
                }
            } catch (error) {
                console.error("Error fetching categories", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
                if (data.success) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts =
        activeCategory === null ? products : products.filter((p) => p.category?.slug === activeCategory);

    // Handle opening the modal with selected product
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="px-24 py-8 bg-white">
            {/* Tabs */}
            <div className="flex justify-center space-x-4 border-b border-gray-300 mb-6">
                <button
                    className={`px-4 py-2 text-md font-medium ${activeCategory === null
                        ? "border-b-4 border-red-600 text-red-600"
                        : "text-gray-600 hover:text-gray-800"
                        }`}
                    onClick={() => setActiveCategory(null)}
                >
                    All Products
                </button>
                {categories.map((category) => (
                    <button
                        key={category._id}
                        className={`px-4 py-2 text-md font-medium ${activeCategory === category.slug
                            ? "border-b-4 border-red-600 text-red-600"
                            : "text-gray-600 hover:text-gray-800"
                            }`}
                        onClick={() => setActiveCategory(category.slug)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Product Grid with Hover Effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product._id} className="relative group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
                                    alt={product.name}
                                    className="object-fill w-full h-96 transition-transform duration-300 group-hover:scale-110"
                                />
                                <FaHeart
                                    className="absolute top-2 right-2 w-6 h-6 text-red-600 hover:text-white"
                                // Open modal on heart icon click
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex space-x-3">
                                        <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                                            <FaShoppingCart className="w-5 h-5" />
                                        </button>
                                        <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                                            <FaEye className="w-5 h-5" />
                                        </button>
                                        <Link to="/shop" className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600">
                                            <FaExchangeAlt className="w-5 h-5" />
                                        </Link>
                                    </div>
                                    <button
                                        onClick={() => navigate(`/product/${product.slug}`)}
                                        className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold text-gray-800 mt-2 text-center">{product.name}</h1>
                            <p className="text-xl text-red-600 font-medium text-center">$ {product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No products available.</p>
                )}
            </div>

            {/* Modal for Product Information */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-sm w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedProduct.name}</h2>
                        <img
                            src={`http://localhost:8080/api/v1/product/product-photo/${selectedProduct._id}`}
                            alt={selectedProduct.name}
                            className="w-full h-60 object-cover mb-4"
                        />
                        <p className="text-lg font-medium text-gray-700">Price: $ {selectedProduct.price}</p>
                        <p className="text-gray-600 mt-4">{selectedProduct.description}</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-red-600 text-white px-4 py-2 rounded-md"
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

export default CategoryTabs;
