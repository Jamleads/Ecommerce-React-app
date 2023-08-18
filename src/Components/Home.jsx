import React from "react";
import Carousel from "./Carousel";
import ProductCard1 from "./ProductCard1";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProducts } from "../store/productSlice";
import Footer from "./Footer";
import { addToFavSlice } from "../store/favouriteSlice";
import testImg from "/assets/chair-product.svg";
import { clearMag, addMag } from "../store/magnifySlice";
import { useSelector } from "react-redux";
import MagnifyImage from "./MagnifyImage";
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
  const addToFavourite = (product) => {
    dispatch(addToFavSlice(product));
    console.log("its working");
    showAddToast("Item added to Whishlists");
  };

  // Magnify image
  const [magnified, setMagnified] = useState(false);
  const clearMagnify = () => {
    dispatch(clearMag());
    setMagnified(!magnified);
  };
  const showMagnify = (product) => {
    clearMagnify();
    dispatch(addMag(product));
    setMagnified(!magnified);
  };
  const productMagnify = useSelector((state) => state.magnify);

  return (
    <>
      <Carousel />

      <div className="relative lg:w-[70%] mx-auto my-20">
        <div
          className={`lg:px-0 px-5 grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-10 ${
            magnified ? "hidden" : ""
          }`}
        >
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
                onClickMagnify={() => showMagnify(product)}
              />
            </div>
          ))}
        </div>

        {productMagnify.map((product) => {
          return (
            <div
              key={product.id}
              className="absolute w-full top-0 left-0 right-0 p-10 bg-offSkyBlue"
            >
              <MagnifyImage {...product} closeMag={() => clearMagnify()} />
            </div>
          );
        })}
      </div>

      <Footer style={magnified ? "hidden" : ""} />
      <ToastContainer />
    </>
  );
};

export default Home;
