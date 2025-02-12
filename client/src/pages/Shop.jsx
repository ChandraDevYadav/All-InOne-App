import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useCart } from "../context/cart";
import ProductList from "../components/Home/ProductList";
import FilterSidebar from "../components/Home/FilterSidebar";

const Shop = () => {
    const [cart, setCart] = useCart();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // ✅ Fetch total product count
    const getTotal = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/product/product-count");
            setTotal(data?.total);
        } catch (error) {
            console.log("Error fetching total count:", error);
        }
    };

    // ✅ Fetch all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
            console.log("Categories API Response:", data); // Debugging
            if (data?.success) {
                setCategories(data?.category); // Corrected response handling
            } else {
                console.log("Failed to fetch categories:", data.message || "No categories found");
            }
        } catch (error) {
            console.log("Error fetching categories:", error.message);
        }
    };

    // ✅ Fetch all products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    // ✅ Handle category checkbox filtering
    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };

    // ✅ Filter products based on selected categories or price range
    const filterProduct = async () => {
        try {
            console.log("Filtering with:", { checked, radio });
            const { data } = await axios.post("http://localhost:8080/api/v1/product/product-filters", {
                checked,
                radio, // Ensure it's passed correctly
            });
            setProducts(data?.products);
        } catch (error) {
            console.log("Error filtering products:", error);
        }
    };

    // ✅ Fetch data on component mount
    useEffect(() => {
        getAllProducts();
        getAllCategory();
        getTotal();
    }, []);

    // ✅ Re-fetch products when filter changes
    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length > 0 || radio.length > 0) {
            filterProduct();
        } else {
            getAllProducts();
        }
    }, [checked, radio]); // Remove `.length` from `radio`

    return (
        <Layout>
            <div className="grid grid-cols-12 px-16 py-12">
                {/* Sidebar for Filters */}
                <div className="col-span-2">
                    <FilterSidebar categories={categories} handleFilter={handleFilter} setRadio={setRadio} />
                </div>

                {/* Main Content for Products */}
                <div className="col-span-10">
                    <ProductList
                        products={products}
                        cart={cart}
                        setCart={setCart}
                        total={total}
                        loading={loading}
                        setPage={setPage}
                        page={page}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Shop;
