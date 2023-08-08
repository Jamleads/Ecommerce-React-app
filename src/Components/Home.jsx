import React from "react";
import Carousel from "./Carousel";
import ProductCard1 from "./ProductCard1";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const dispatch = useDispatch();
  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
    showToast("Item successfully added to cart!");
  };
  const showToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000, // Close the notification after 2 seconds
      hideProgressBar: false,
    });
  };

  return (
    <div>
      <Carousel />

      <div className="lg:w-[70%] mx-auto my-20">
        <div className="lg:px-0 px-5 grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-10">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard1
                {...product}
                style={``}
                imageHeight="h-[200px]"
                detailsHeight="h-[150px]"
                onClickCart={() => addToCart(product)}
              />
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
