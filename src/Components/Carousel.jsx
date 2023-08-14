import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import collectionProduct from "/assets/chair-product.svg";
import collectionProduct2 from "/assets/chair-product2.svg";
import { useState, useEffect } from "react";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="w-full lg:h-[65vh]">
      <Slider {...settings} className="bg-[#F2F0FF]">
        <CarouselCard
          style="carousel1"
          product={collectionProduct}
          collectionSubTitle="Best Furniture For Your Castle...."
          collectionTitle="Furniture"
          collectionDecription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo."
        />

        <CarouselCard
          product={collectionProduct2}
          collectionSubTitle="Best Furniture For Your Castle...."
          collectionTitle="Furniture"
          collectionDecription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo."
        />
        {/* <CarouselCard /> */}
      </Slider>
    </div>
  );
};

export default Carousel;
