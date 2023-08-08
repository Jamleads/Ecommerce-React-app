import React from "react";
import { useSelector } from "react-redux";
import Shocase from "./Showcase";
import ProductCart2 from "./ProductCart2";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  console.log(productCart);
  return (
    <>
      <Shocase pageTitle="Shoping Cart" />

      <section className="lg:w-[70%] mx-auto mt-32 lg:flex gap-10 h-[50vh]">
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
              <ProductCart2 {...product} />
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 bg-green-300"></div>
      </section>
    </>
  );
};

export default Cart;
