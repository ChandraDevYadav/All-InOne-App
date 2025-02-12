import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";

const ProductGrid = ({ products }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((p) => (
                <div key={p._id} className="border">
                    <img
                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                        className="object-fill w-full h-40"
                    />
                    {/* <div className="px-4">
                        <h1 className="text-xl font-semibold text-gray-800">{p.name}</h1>
                        <p className="text-sm text-gray-700 font-medium py-2">
                            {p.description.substring(0, 30)}
                        </p>
                        <div className="flex justify-start items-center gap-2">
                            <p className="text-sm font-medium text-red-600 line-through">
                                $ 150
                            </p>
                            <p className="text-xl text-gray-900 font-medium">$ {p.price}</p>
                        </div>
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
                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
