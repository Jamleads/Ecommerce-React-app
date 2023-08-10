import React from "react";
import Button from "./Button";
import facebookIcon from "/assets/Github.svg";
import instagramIcon from "/assets/Linkedin.svg";
import twitterIcon from "/assets/Twitter.svg";
import image from "/assets/chair-product.svg";
import starIcon from "/assets/starIcon.svg";
import favouritesIcon from "/assets/favourite-icon2.svg";

const ProductDetailsCard = ({
  image,
  title,
  rate,
  price,
  description,
  category,
}) => {
  return (
    <div className="lg:w-[75%] lg:flex items-center gap-5 p-5 mx-auto bg-mainWhite shadow-xl">
      <div className="image-wrap lg:w-[40%] bg-[#C4C4C4] f-full flex items-center justify-center">
        <img src={image} alt="" />
      </div>

      <div className="lg:w-[60%]">
        <p className="title lg:text-3xl text-[#0D134E] font-bold">{title}</p>

        <div className="rating flex items-center ">
          <div className="rating-star flex items-center gap-1">
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
          </div>
          <p className="ml-3 text-xs">({rate})</p>
        </div>

        <p className="price text-[#151875] mt-1">
          $ <span>{price}</span>
        </p>

        <p className="color text-[#151875]">
          Color: <span></span>
        </p>

        <div className="description mt-1 mb-2 text-xs text-[#A9ACC6]">
          {description}
        </div>

        <div className="flex items-center">
          <button
            className="px-5 py-1 border-2 border-[#151875] text-[#151875]"
            onClick={() => {}}
          >
            Add To cart
          </button>

          <div
            className="favourite-btn h-[30px] ml-5 w-[30px] flex items-center justify-center rounded-full"
            onClick={() => {}}
          >
            <img src={favouritesIcon} alt="favourite-icon" width="100%" />
          </div>
        </div>

        <p className="text-[#151875] text-sm mt-2">
          Category: <span>{category}</span>
        </p>

        <p className="text-[#151875] text-sm mt-2">
          Tags: <span></span>
        </p>

        <div className="social flex items-center mt-3">
          <p className="text-[#151875] text-sm">Share</p>

          <div className="ml-3 flex items-center gap-3 rounded-full">
            <div className="git bg-[#151875] w-[15px] h-[15px] flex items-center justify-center rounded-full">
              <a href="#" target="_blank">
                <img src={facebookIcon} alt="" />
              </a>
            </div>
            <div className="linkedin bg-[#151875] w-[15px] h-[15px] flex items-center justify-center rounded-full">
              <a href="#" target="_blank">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <div className="twitter bg-[#151875] w-[15px] h-[15px] flex items-center justify-center rounded-full">
              <a href="#" target="_blank">
                <img src={twitterIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
