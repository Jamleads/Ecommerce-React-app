import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import gitIcon from "/assets/Github.svg";
import linkedinIcon from "/assets/Linkedin.svg";
import twitterIcon from "/assets/Twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-top bg-[#EEEFFB]">
        <div className="footer-top-wrap lg:w-[70%] mx-auto lg:py-20 flex justify-between">
          <div className="lg:w-1/">
            <Link to="/">
              <h1 className="brand-name font-bold text-3xl text-[#000000]">
                Hekto
              </h1>
            </Link>
            <div className="w-full bg-[#ffffff] my-3 flex items-center">
              <input type="text" className="w-[70%] py-2 px-5" />
              <Button buttonText="Sign Up" style="text-xs" />
            </div>
            <div className="">
              <p className="text-[#8A8FB9] text-sm">Contact Address</p>
              <p className="text-[#8A8FB9] text-sm">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>

          <div className="lg:w-1/">
            <p className="text-[#000000] text-xl font-bold">Catagories</p>
            <ul className="mt-5">
              <a href="#">
                <li className="text-[#8A8FB9] text-sm">Laptops & Computers</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">
                  Cameras & Photography
                </li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">
                  Smart Phones & Tablets
                </li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">
                  Video Games & Consoles
                </li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">
                  Waterproof Headphones
                </li>
              </a>
            </ul>
          </div>

          <div className="lg:w-1/">
            <p className="text-[#000000] text-xl font-bold">Customer Care</p>
            <ul className="mt-5">
              <a href="#">
                <li className="text-[#8A8FB9] text-sm">My Account</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">Discount</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">Returns</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">Orders History</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">Order Tracking</li>
              </a>
            </ul>
          </div>

          <div className="lg:w-1/">
            <p className="text-[#000000] text-xl font-bold">Pages</p>
            <ul className="mt-5">
              <a href="#">
                <li className="text-[#8A8FB9] text-sm">Blog</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">Browse the Shop</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">Category</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">Pre-Built Pages</li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">
                  Visual Composer Elements
                </li>
              </a>
              <a href="#">
                <li className="text-[#8A8FB9] text-sm mt-2">
                  WooCommerce Pages
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-[#E7E4F8]">
        <div className="footer-button-wrap flex items-center justify-between py-2 lg:w-[60%] mx-auto">
          <p className="text-[#8A8FB9] text-sm">
            &copy;<a href="https://jamleads.netlify.app/">Jamleads</a> - All
            Rights Reserved
          </p>
          <div className="flex items-center gap-3 rounded-full">
            <div className="git bg-[#151875] w-[25px] h-[25px] flex items-center justify-center rounded-full">
              <a href="#">
                <img src={gitIcon} alt="" />
              </a>
            </div>
            <div className="linkedin bg-[#151875] w-[25px] h-[25px] flex items-center justify-center rounded-full">
              <a href="#">
                <img src={linkedinIcon} alt="" />
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
    </>
  );
};

export default Footer;
