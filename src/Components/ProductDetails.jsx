import React from "react";
import Showcase from "./Showcase";
import Footer from "./Footer";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetails = () => {
  return (
    <div>
      <div className="">
        <Showcase pageTitle="Product Details" />

        <section className="lg:w-[70%] mx-auto my-20">
          <ProductDetailsCard />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
