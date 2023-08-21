import React from "react";
import ProductDetailsCard from "./ProductDetailsCard";
import { useSelector } from "react-redux";
import Showcase from "./Showcase";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";
import MyLottieAnimation from "./MyLottieAnimation";

const Wishlist = () => {
  const productsFavourites = useSelector((state) => state.favourite);

  return (
    <>
      <Showcase pageTitle="Wishlist" />
      <div className="lg:w-[70%] mx-auto lg:mt-32 mt-10 my-20 grid lg:grid-cols-1 grid-cols-1 gap-y-10">
        {productsFavourites.length ? (
          productsFavourites.map((product) => {
            return (
              <div key={product.id}>
                <ProductDetailsCard {...product} favStyle="hidden" />
              </div>
            );
          })
        ) : (
          <div>
            <MyLottieAnimation />

            <p className="text-center text-2xl">
              You haven't added any product to wishlist yet, kindly proceed to{" "}
              <Link to="/" className="text-pink font-bold">
                Home
              </Link>{" "}
              and select products
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
