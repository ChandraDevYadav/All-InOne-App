import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <div className="" style={{ marginTop: "100px" }}>
                <div className="grid grid-cols-4">
                    {categories.map((c) => (
                        <div className="col-span-4 mt-5 mb-3 gap-4" key={c._id}>
                            <div className="card">
                                <Link to={`/category/${c.slug}`} className="">
                                    {c.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Categories;