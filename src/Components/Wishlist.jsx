import React from "react";
import ProductDetailsCard from "./ProductDetailsCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const productsFavourites = useSelector((state) => state.favourite);
  return (
    <div>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        voluptatum omnis repudiandae, earum ex perspiciatis eum facere,
        deleniti, odio fugiat esse inventore assumenda laboriosam quas! Harum
        hic cumque libero modi!
        <p className="text-5xl text-center font-bold">
          This is the Wishlist Product page
        </p>
      </h2>

      {productsFavourites.map((product) => {
        return (
          <div key={product.id}>
            <ProductDetailsCard {...product} />
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
