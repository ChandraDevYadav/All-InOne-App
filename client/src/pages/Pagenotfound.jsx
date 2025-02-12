import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Layout title={"go back - page not found"}>
      <div className="flex justify-center items-center py-36">
        <div className="text-center items-center">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-lg font-medium py-6">Oops ! Page Not Found</h2>
          <Link to='/' className="border border-black px-4 py-2 font-medium hover:bg-black hover:text-white text-sm">Go Back</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
