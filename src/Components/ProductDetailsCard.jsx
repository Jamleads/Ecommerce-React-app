import React from "react";
import Button from "./Button";
import facebookIcon from "/assets/Github.svg";
import instagramIcon from "/assets/Linkedin.svg";
import twitterIcon from "/assets/Twitter.svg";
import image from "/assets/chair-product.svg";
import starIcon from "/assets/starIcon.svg";

const ProductDetailsCard = () => {
  return (
    <div className="lg:w-[75%] lg:flex items-center gap-5 p-5 mx-auto bg-mainWhite shadow-xl">
      <div className="image-wrap w-[40%] bg-[#C4C4C4] f-full flex items-center justify-center">
        <img src={image} alt="" />
      </div>

      <div className="w-[60%]">
        <p className="title">Playwood arm chair</p>
        <div className="rating flex items-center">
          <div className="rating-star flex items-center gap-1">
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
            <img src={starIcon} alt="starIcon" />
          </div>
          <p className="ml-3">(22)</p>
        </div>
        <p className="price">
          $ <span>34.00</span>
        </p>
        <p className="color">Color</p>
        <div className="description"></div>

        <Button />

        <p>
          Category: <span></span>
        </p>

        <p>
          Tags: <span></span>
        </p>

        <div className="social">
          <p>Share</p>

          <div className="flex items-center gap-3 rounded-full">
            <div className="git bg-[#151875] w-[25px] h-[25px] flex items-center justify-center rounded-full">
              <a href="#">
                <img src={facebookIcon} alt="" />
              </a>
            </div>
            <div className="linkedin bg-[#151875] w-[25px] h-[25px] flex items-center justify-center rounded-full">
              <a href="#">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <div className="twitter bg-[#151875] w-[25px] h-[25px] flex items-center justify-center rounded-full">
              <a href="#">
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
