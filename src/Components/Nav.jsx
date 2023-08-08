import React from "react";
import emailIcon from "/assets/email-icon.svg";
import phoneIcon from "/assets/phone-icon.svg";
// import SubmitButton from "./SubmitButton";
// import UserStore from "../store/userStore";
import favouritesIcon from "/assets/favourite-icon.svg";
import cartIcon from "/assets/cart-icon.svg";
import searchIcon from "/assets/search-icon.svg";
import Home from "./Home";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav w-full fixed top-0 left-0 right-0 left-0">
        <div className="nav-contact w-full bg-purpple py-2">
          <div className="nav-contact-wrap lg:w-[70%] mx-auto flex items-center justify-between">
            <div className="lg:flex items-center gap-3">
              <a
                href="mailto:ogunyemiadetunji17@gmail.com?subject=Frontend Development"
                target="_blank"
              >
                <div className="email flex items-center">
                  <img src={emailIcon} alt="email-icon" />
                  <p className="ml-2 text-base text-offWhite">
                    ogunyemiaetunji17@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+2349067942127">
                <div className="phone flex items-center">
                  <img src={phoneIcon} alt="phone-icon" />
                  <p className="ml-2 text-base text-offWhite">
                    (+234) 9067942127
                  </p>
                </div>
              </a>
            </div>

            <div className="lg:flex items-center gap-3">
              <div className="languages-wrap">
                <select
                  name="languages"
                  id="langueges"
                  className="bg-transparent text-offWhite text-base"
                >
                  <option value="eng">English</option>
                </select>
              </div>

              <div className="currency-wrap">
                <select
                  name="currency"
                  id="currency"
                  className="bg-transparent text-offWhite text-base"
                >
                  <option value="usd">USD</option>
                </select>
              </div>

              {/* <div className="user">
                <p className="text-offWhite text-base">{user}</p>
              </div> */}

              {/* <div className="submitButton">
                <SubmitButton
                  logInOut={UserStore.isLoggedIn ? "Logout" : "Login"}
                  onClick={
                    UserStore.isLoggedIn
                      ? () => this.doLogOut()
                      : () => this.componentDidMount()
                  }
                />
              </div> */}

              <Link to="/wishlist">
                <div className="favourites flex items-center">
                  <p className="text-offWhite text-base">Wishlist</p>
                  <img
                    src={favouritesIcon}
                    alt="favourites-Icon"
                    className="lg:ml-2"
                  />
                </div>
              </Link>

              <Link to="/cart">
                <div className="cart-wrap flex items-center">
                  <p className="text-offWhite text-base">Cart</p>
                  <img src={cartIcon} alt="cart-icon" className="ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-links w-full bg-mainWhite py-5">
          <div className="nav-links-wrap lg:w-[70%] mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <h1 className="brand-name font-bold text-3xl text-[#0D0E43]">
                  Hekto
                </h1>
              </Link>

              <ul className="nav-lists flex items-center gap-5 ml-20 text-{#0D0E43}">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pages">Pages</Link>
                </li>
                <li>
                  <Link href="/products">Product</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center border-[1px] border-[#E7E6EF]">
              <input
                type="text"
                placeholder=""
                className="bg-transparent py-2 lg:w-[250px] px-5"
              />
              <div className="w-[40px] h-[40px] bg-pink flex items-center justify-center">
                <img src={searchIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mt-[124px]">
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
