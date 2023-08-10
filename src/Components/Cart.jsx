import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Shocase from "./Showcase";
import ProductCart2 from "./ProductCart2";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { remove, clear } from "../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import clockImg from "/assets/clock-icon.svg";
import checklist from "/assets/checklist.svg";
import checked from "/assets/check-mark-icon.svg";
import Footer from "./Footer";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  console.log(productCart);

  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id));
    showRemoveToast("Item successfully removed from cart!");
  };

  const showRemoveToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const clearCart = () => {
    dispatch(clear());
    showClearToast("Cart cleared");
  };

  const showClearToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  let itemsTotalPrice = 1000;
  const chargesFee = itemsTotalPrice * 0.02;
  const checoutTotalPrice = itemsTotalPrice + chargesFee;

  const chechOut = () => {
    const modal = document.querySelector(".modal");
    const cartSection = document.querySelector(".cartSection");
    const checkoutBtn = document.querySelector(".checkoutBtn");
    checkoutBtn.addEventListener("click", () => {
      cartSection.classList.add("blur");
      modal.classList.remove("hidden");
    });
  };

  return (
    <div className="relative">
      <Shocase pageTitle="Shoping Cart" />

      <section className="cartSection lg:w-[70%] mx-auto mt-32 my-20 lg:flex gap-10">
        <div className="lg:w-2/3 left">
          <div className="flex items-center lg:mb-8">
            <div className="product-side w-2/5 lg:text-lg text-[#101750] font-bold">
              Products
            </div>

            <div className="price-side w-3/5 flex item-center justify-between text-start">
              <div className="w-1/3 lg:text-lg text-[#101750] font-bold">
                Price
              </div>
              <div className="w-1/3 lg:text-lg text-[#101750] font-bold">
                Quantity
              </div>
              <div className="w-1/3 lg:text-lg text-[#101750] font-bold">
                Total
              </div>
            </div>
          </div>

          {productCart.map((product) => (
            <div key={product.id}>
              <ProductCart2
                {...product}
                onClick={() => removeFromCart(product.id)}
              />
            </div>
          ))}

          <div className="cart-btns flex items-center justify-between my-5">
            <Link to="/">
              <Button buttonText="Update Cart" />
            </Link>
            <Button buttonText="Clear Cart" onClick={() => clearCart()} />
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="cart-totals">
            <h1 className="text-center lg:text-xl  text-[#101750] font-bold">
              Cart Totals
            </h1>

            <div className="items-total p-5 mt-10 bg-[#F4F4FC]">
              <div className="flex items-center justify-between py-5 border-b-2 border-[#E8E6F1]">
                <p className="lg:text-lg text-[#101750] text-bold">
                  Item's total: <span className="total-items">(0)</span>
                </p>
                <p className="lg:text-lg text-[#101750] text-bold">
                  $<span>{itemsTotalPrice}</span>
                </p>
              </div>

              <div className="flex items-center justify-between py-5 border-b-2 border-[#E8E6F1]">
                <p className="lg:text-lg text-[#101750] text-bold">Fees(2%):</p>
                <p className="lg:text-lg text-[#101750] text-bold">
                  $<span>{chargesFee}</span>
                </p>
              </div>

              <div className="flex items-center justify-between py-5 border-b-2 border-[#E8E6F1]">
                <p className="lg:text-lg text-[#101750] text-bold">Total:</p>
                <p className="lg:text-lg text-[#101750] text-bold">
                  $<span>{checoutTotalPrice}</span>
                </p>
              </div>

              <Button
                style="checkoutBtn w-full bg-[#19D16F] mt-10 mb-5"
                buttonText="Proceed To Checkout"
                onClick={() => chechOut()}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="absolute modal top-[35%] left-0 right-0 hidden w-full flex justify-center">
        <div className="lg:w-[50%] lg:h-[350px] mx-auto p-5 relative flex flex-col items-center justify-center gap-5 rounded-xl border-4 border-dashed bg-mainWhite">
          <div className="absolute top-0 -left-8">
            <img src={clockImg} alt="clock-image" width="70px" />
          </div>

          <div className="absolute bottom-0 -right-8">
            <img src={checklist} alt="checklist-image" width="70px" />
          </div>

          <img src={checked} alt="check-mark-icon" />
          <h1 className="lg:text-3xl font-bold">Your Order is Completed!</h1>
          <p className="text-center font-light w-[80%]">
            Thank you for your order! Your delivery package is being processed
            and will be ready within 3-6 hours. You will receive an email
            confirmation when your delivery package is ready for pick up.
          </p>
          <Link to="/">
            <Button buttonText="Continue Shopping" style="text-sm" />
          </Link>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Cart;
