import React from "react";
import Showcase from "./Showcase";
import Footer from "./Footer";
import ProductDetailsCard from "./ProductDetailsCard";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state.product;
  return (
    <div>
      <div className="">
        <Showcase pageTitle="Product Details" />

        <section className="lg:w-[70%] mx-auto my-20">
          <ProductDetailsCard {...product} />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
