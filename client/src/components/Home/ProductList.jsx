import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineAppstore, AiOutlineUnorderedList } from "react-icons/ai";

const ProductList = ({ products, cart, setCart, total, loading, setPage, page }) => {
    const navigate = useNavigate();

    const [viewMode, setViewMode] = useState(localStorage.getItem('viewMode') || 'grid');

    const toggleLayout = (mode) => {
        setViewMode(mode);
        localStorage.setItem('viewMode', mode);
    };

    useEffect(() => {
        const savedViewMode = localStorage.getItem('viewMode');
        if (savedViewMode) {
            setViewMode(savedViewMode);
        }
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center gap-4 mb-8 py-4 px-4 bg-white rounded-md">
                <p className='text-lg text-gray-600 font-medium'>Showing {products.length} of {total} Results</p>
                <div className='flex justify-center items-center gap-4'>
                    <button
                        onClick={() => toggleLayout('grid')}
                        className={viewMode === 'grid' ? 'text-pink-600' : 'text-gray-600 hover:text-black'}
                    >
                        <AiOutlineAppstore size={28} />
                    </button>
                    <button
                        onClick={() => toggleLayout('row')}
                        className={viewMode === 'row' ? 'text-pink-600' : 'text-gray-600 hover:text-black'}
                    >
                        <AiOutlineUnorderedList size={28} />
                    </button>
                </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-4'}>
                {products?.map((p) => (
                    <div key={p._id} className={`${viewMode === 'grid' ? 'border p-4 rounded-md' : 'flex items-start border p-4 rounded-md w-full'}`}>
                        <img
                            src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                            alt={p.name}
                            className={viewMode === 'grid' ? 'object-cover w-full h-40' : 'object-cover w-96 h-64'}
                        />
                        <div className={viewMode === 'row' ? 'pl-6' : 'text-start'}>
                            <h1 className="text-xl font-semibold text-gray-800">{p.name}</h1>
                            <p className="text-sm text-gray-700 font-medium py-2">{p.description.substring(0, 30)}</p>
                            <div className="flex justify-start items-center gap-2">
                                <p className="text-sm font-medium text-red-600 line-through">$ 150</p>
                                <p className="text-xl text-gray-900 font-medium">$ {p.price}</p>
                            </div>
                            {viewMode === 'row' && <p className="text-gray-700 mt-2">{p.description}</p>}
                            <div className="flex justify-start items-center gap-4 py-4">
                                <button
                                    onClick={() => navigate(`/product/${p.slug}`)}
                                    className="bg-blue-600 rounded-md text-white text-sm px-4 py-2 font-medium"
                                >
                                    More Details
                                </button>
                                <button
                                    onClick={() => {
                                        setCart([...cart, p]);
                                        localStorage.setItem("cart", JSON.stringify([...cart, p]));
                                        toast.success("Item Added to cart");
                                    }}
                                >
                                    <img src="/plus.png" alt="" className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="m-2 p-3">
                {products && products.length < total && (
                    <button
                        className="flex justify-start items-center gap-2 text-white font-medium rounded-md bg-yellow-600 px-4 py-2"
                        onClick={(e) => {
                            e.preventDefault();
                            setPage(page + 1);
                        }}
                    >
                        {loading ? "Loading ..." : <> Load More</>}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductList;
