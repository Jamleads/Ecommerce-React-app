import React from "react";
import ProductDetailsCard from "./ProductDetailsCard";
import { useSelector } from "react-redux";
import Showcase from "./Showcase";

const Wishlist = () => {
  const productsFavourites = useSelector((state) => state.favourite);

  return (
    <div>
      <Showcase pageTitle="Wishlist" />

      <div className="lg:w-[70%] mx-auto lg:mt-32 mt-10 my-20 grid lg:grid-cols-1 grid-cols-1 gap-y-10">
        {productsFavourites.map((product) => {
          return (
            <div key={product.id}>
              <ProductDetailsCard {...product} favStyle="hidden" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
