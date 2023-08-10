import React from "react";
import Carousel from "./Carousel";
import ProductCard1 from "./ProductCard1";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProducts } from "../store/productSlice";
import Footer from "./Footer";
// import { useHistory } from "react-router-dom";

const Home = () => {
  // const [products, getProduct] = useState([]);

  const { data: products } = useSelector((state) => state.products);
  useEffect(() => {
    // dispatch data fetched asynchronously
    dispatch(getProducts());

    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     getProduct(data);
    //     console.log(data);
    //   });
  }, []);

  // Add to cart function
  const dispatch = useDispatch();
  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
    showAddToast("Item successfully added to cart!");
  };

  // Add to cart alert message
  const showAddToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  // Add to favourites
  // const addToFavourite = (product) => {
  //   dispatch(add2(product));
  // };
  // const history = useHistory([]);

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
                onClickFavourite={() => addToFavourite(product)}
                onClickToDetails={() => {
                  // history.push({
                  //   pathname: `/product/${product.id}`,
                  //   state: { product },
                  // });
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
