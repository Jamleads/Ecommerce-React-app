import React from "react";
import Carousel from "./Carousel";
import ProductCard1 from "./ProductCard1";
import productImg from "/assets/product-img.svg";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";

const Home = () => {
  const [products, getProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        getProduct(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Carousel />

      <div className="lg:w-[70%] mx-auto my-20">
        <div className="lg:px-0 px-5 grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard1
                {...product}
                style={``}
                imageHeight="h-[200px]"
                detailsHeight="h-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
