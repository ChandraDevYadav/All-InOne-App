import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce app"}>
      <div className="grid grid-cols-5 gap-4 justify-center items-center px-24 py-6">
        <div className="col-span-3">
          <div>
            <img src="/about.jpg" alt="" />
          </div>
        </div>
        <div className="col-span-2">
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, sed esse reiciendis iusto nobis, maxime officiis quasi libero adipisci qui veniam quia officia cum perspiciatis consequatur voluptatum excepturi dignissimos, delectus pariatur magni optio est! At ducimus sapiente voluptatum, doloremque architecto consequatur odio, quibusdam quo molestiae maiores itaque, tempora dolor odit!</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
