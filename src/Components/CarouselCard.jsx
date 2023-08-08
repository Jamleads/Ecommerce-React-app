import React from "react";
import carouelAddImg from "/assets/carousel-add.svg";
import product from "/assets/chair-product.svg";
import Button from "./Button";

const CarouselCard = ({
  style,
  collectionSubTitle,
  collectionTitle,
  collectionDecription,
  product,
}) => {
  return (
    <div className={`collectionCard ${style} h-[65vh] w-full relative`}>
      <img
        src={carouelAddImg}
        alt=""
        className="carouel-add-img absolute top-0 left-0"
      />

      <div className="collection-wrap lg:w-[80%] flex items-center lg:gap-10 lg:mx-auto lg:h-[65vh]">
        <div className="collection-details lg:w-[36%] ml-auto">
          <p className="collection-sub-title text-xs text-pink font-bold">
            {collectionSubTitle}
          </p>
          <h1 className="collection-title font-bold lg:text-4xl mt-2">
            {`New ${collectionTitle} Collection Trends in 2020`}
          </h1>

          <p className="collection-decription text-xs text-[#8A8FB9] lg:my-5 lg:w-[80%]">
            {collectionDecription}
          </p>

          <Button buttonText="Shop Now" />
        </div>

        <div className="collection-image-wrap lg:w-[50%] relative">
          <div className="collection-image flex items-center justify-center">
            <img
              src={product}
              alt="collection of Prouct"
              className="w-[500px]"
            />
          </div>

          <div className="colection-bolb absolute bottom-0 left-4 w-[480px] h-[480px] bg-[#ecd2fa59] mix-blend-multiply rounded-full"></div>
          <div className="colection-bolb absolute top-0 right-12 w-[480px] h-[480px] bg-[#ecd2fa59] mix-blend-multiply rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
