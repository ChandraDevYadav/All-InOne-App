import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useCart } from "../context/cart";
import ProductList from "../components/Home/ProductList";
import FilterSidebar from "../components/Home/FilterSidebar";
import HeroSell from "../components/Home/HeroSell";
import Carousel from "../components/Home/Carousel";
import SlickSlider from "../components/Home/SlickSlider";
import RecentlyAddedProducts from "../components/Home/RecentlyAddedProducts";
import Banner from "../components/Home/Banner";
import CategoryTabs from "../components/Home/CategoryTabs";
import Advertisement from "../components/Home/Advertisement";
import SellersList from "../components/Home/SellersList";
import LatestNews from "../components/Home/LatestNews";
import MainFooter from "../components/Layout/MainFooter";

const HomePage = () => {
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllCategory();
    getTotal();
  }, []);

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  return (
    <Layout title={"All Products - Best offers"}>
      {/* <HeroSell /> */}
      <Carousel />
      {/* <SlickSlider /> */}
      {/* <div className="grid grid-cols-12 px-16 py-12">
        <div className="col-span-2">
          <FilterSidebar categories={categories} handleFilter={handleFilter} setRadio={setRadio} />
        </div>
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
      </div> */}
      <div>
        <RecentlyAddedProducts />
        <Banner />
        <CategoryTabs />
        <Advertisement />
        <SellersList />
        <LatestNews />
        <MainFooter />
      </div>
    </Layout>
  );
};

export default HomePage;
