import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout";
const CategoryProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (params?.slug) getPrductsByCat();
    }, [params?.slug]);
    const getPrductsByCat = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/product/product-category/${params.slug}`
            );
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="mt-3">
                <h4 className="text-center">Category - {category?.name}</h4>
                <h6 className="text-center">{products?.length} result found </h6>
                <div className="grid-cols-12">
                    <div className="col-span-9 offset-1">
                        <div className="flex flex-wrap">
                            {products?.map((p) => (
                                <div className="m-2" key={p._id}>
                                    <img
                                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                                        className="object-fill"
                                        alt={p.name}
                                    />
                                    <div className="border">
                                        <div className="">
                                            <h5 className="">{p.name}</h5>
                                            <h5 className="">
                                                {p.price.toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency: "USD",
                                                })}
                                            </h5>
                                        </div>
                                        <p className="">
                                            {p.description.substring(0, 60)}...
                                        </p>
                                        <div className="">
                                            <button
                                                className="ml-1 bg-blue-600 text-white"
                                                onClick={() => navigate(`/product/${p.slug}`)}
                                            >
                                                More Details
                                            </button>
                                            {/* <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    ADD TO CART
                  </button> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CategoryProduct;