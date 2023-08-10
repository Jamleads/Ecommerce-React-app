import React, { useEffect } from "react";
import { useState } from "react";

const ProductCart2 = ({ image, title, price, onClick, setItemsTotalPrice }) => {
  const [count, setCount] = useState(1);

  function increasement() {
    setCount((count) => count + 1);
    setItemsTotalPrice((prev) => {
      return prev + Number(price);
    });
  }

  function decreasement() {
    if (count <= 1) return;
    setCount((count) => count - 1);
    setItemsTotalPrice((prev) => prev - Number(price));
  }

  return (
    <div className="product-card2 flex items-center py-2 lg:px-0 px-3 border-b-4 border-[#E1E1E4]">
      <div className="product-side w-2/5 flex items-center">
        <div className="product-img-wrap w-[30%] lg:h-[90px] h-[60px] border-[#F6F5FF] border-2 bg-[#F7F7F7] flex items-center justify-center relative">
          <img src={image} alt="" width="80%" />

          <div
            className="btn absolute -top-2 right-0 w-[20px] h-[20px] flex items-center justify-center bg-red-500 text-mainWhite rounded-full"
            onClick={onClick}
          >
            X
          </div>
        </div>

        <div className="product-details-wrap w-[70%] lg:pl-5 pl-3">
          <h2 className="h-[25px] product-name lg:text-base text-sm overflow-hidden">
            {title}
          </h2>
          <p className="product-color lg:text-base text-xs text-[#A1A8C1]">
            Color: <span>Brown</span>
          </p>
          <p className="product-size lg:text-base text-xs text-[#A1A8C1]">
            Size: <span>XL</span>
          </p>
        </div>
      </div>

      <div className="price-side w-3/5 flex items-center">
        <div className="w-1/3 text-[#15245E] lg:text-base text-xs font-bold">
          ${" "}
          <span className="price lg:text-base text-xs">{price.toFixed(2)}</span>
        </div>

        <div className="w-1/3 quantity">
          <div className="lg:w-[50%] w-full flex items-center justify-between bg-[#F0EFF2] px-2">
            <p
              className="btn active:bg-pink lg:text-base text-xs"
              onClick={decreasement}
            >
              -
            </p>
            <span className="border-x-[1px] px-2 lg:text-base text-xs">
              {count}
            </span>
            <p
              className="btn active:bg-pink lg:text-base text-xs"
              onClick={increasement}
            >
              +
            </p>
          </div>
        </div>

        <div className="w-1/3 text-[#15245E] font-bold lg:text-base text-xs">
          ${" "}
          <span className="total-price">
            {(count * parseFloat(price)).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart2;
