import React from "react";
import { useState } from "react";

const ProductCart2 = ({ image, title, price }) => {
  const [count, setCount] = useState(1);
  let singlePrice = price;
  const totalPrice = count * price;

  return (
    <div className="product-card2 flex items-center py-2 border-b-4 border-[#E1E1E4]">
      <div className="product-side w-2/5 flex items-center">
        <div className="product-img-wrap w-[30%] h-[90px] border-[#F6F5FF] border-2 bg-[#F7F7F7] flex items-center justify-center relative">
          <img src={image} alt="" width="80%" />
          <div className="btn absolute -top-2 right-0 w-[20px] h-[20px] flex items-center justify-center bg-red-500 text-mainWhite rounded-full">
            X
          </div>
        </div>

        <div className="product-details-wrap w-[70%] pl-5">
          <h2 className="h-[25px] product-name overflow-hidden">{title}</h2>
          <p className="product-color text-[#A1A8C1]">
            Color: <span>Brown</span>
          </p>
          <p className="product-size text-[#A1A8C1]">
            Size: <span>XL</span>
          </p>
        </div>
      </div>

      <div className="price-side w-3/5 flex items-center">
        <div className="w-1/3 text-[#15245E] font-bold">
          $ <span className="price">{price}</span>
        </div>

        <div className="w-1/3 quantity">
          <div className="w-[50%] flex items-center justify-between bg-[#F0EFF2] px-2">
            <p
              className="btn active:bg-pink"
              onClick={() => count > 1 && setCount((count) => count - 1)}
            >
              -
            </p>
            <span className="border-x-[1px] px-2">{count}</span>
            <p
              className="btn active:bg-pink"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </p>
          </div>
        </div>

        <div className="w-1/3 text-[#15245E] font-bold">
          ${" "}
          <span className="total-price">
            {(count * parseFloat(singlePrice)).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart2;
