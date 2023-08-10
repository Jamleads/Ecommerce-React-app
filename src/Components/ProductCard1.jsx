import React from "react";
import favouritesIcon from "/assets/favourite-icon2.svg";
import cartIcon from "/assets/cart-icon2.svg";
import magnifyIcon from "/assets/magnify.svg";
import { Link } from "react-router-dom";

const ProductCard1 = ({
  image,
  title,
  category,
  price,
  herf,
  style,
  detailsHeight,
  imageHeight,
  onClickCart,
  onClickFavourite,
  onClickToDetails,
}) => {
  return (
    <div className={`w-[100%] shadow-lg ${herf} ${style}`}>
      <div
        className={`product-img-wrap group w-full ${imageHeight} py-10 bg-offSkyBlue hover:bg-[#F7F7F7] ease-in duration-300 flex justify-center relative`}
      >
        <img src={image} alt="product-img" />

        <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center gap-2 lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div
            className="cart-btn h-[30px] w-[30px] flex items-center justify-center rounded-full hover:bg-pink ease-in duration-300"
            onClick={onClickCart}
          >
            <img src={cartIcon} alt="cart-icon2" />
          </div>

          <div
            className="favourite-btn h-[30px] w-[30px] flex items-center justify-center rounded-full hover:bg-pink ease-in duration-300"
            onClick={onClickFavourite}
          >
            <img src={favouritesIcon} alt="favourite-icon2" />
          </div>

          <div className="magnify-btn h-[30px] w-[30px] flex items-center justify-center rounded-full hover:bg-pink ease-in duration-300">
            <img src={magnifyIcon} alt="magnify-icon" />
          </div>
        </div>
      </div>

      <div
        className={`product-details group flex flex-col items-center justify-center bg-mainWhite hover:bg-[#2F1AC4] ease-in duration-300 lg:px-5 ${detailsHeight}`}
        onClick={onClickToDetails}
      >
        <h3 className="product-title text-pink text-sm text-center h-[20px] overflow-hidden">
          {title}
        </h3>

        <p className="product-code text-navyBlue text-xm my-2 group-hover:text-mainWhite text-center">
          Category - <span>{category}</span>
        </p>
        <p className="product-price text-navyBlue text-xm group-hover:text-mainWhite text-center">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard1;
