import React from "react";
import { useSelector } from "react-redux";
import Shocase from "./Showcase";
import ProductCart2 from "./ProductCart2";
import Button from "./Button";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  console.log(productCart);
  return (
    <>
      <Shocase pageTitle="Shoping Cart" />

      <section className="lg:w-[70%] mx-auto mt-32 lg:flex gap-10">
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

          <div className="total-order">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            vel. Nam omnis incidunt, quidem consequuntur reiciendis animi ea
            ducimus cumque suscipit ullam veniam, consequatur doloremque aperiam
            possimus facilis cum quo!
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="cart-totals">
            <h1 className="text-center lg:text-xl  text-[#101750] font-bold">
              Cart Totals
            </h1>

            <div className="items-total p-5 mt-10 bg-[#F4F4FC]">
              <div className="flex items-center justify-between py-5 border-b-4 border-[#E8E6F1]">
                <p className="lg:text-lg text-[#101750] text-bold">
                  Item's total: <span>(5)</span>
                </p>
                <p className="lg:text-lg text-[#101750] text-bold">
                  $<span>4000</span>
                </p>
              </div>

              <div className="flex items-center justify-between py-5 border-b-4 border-[#E8E6F1]">
                <p className="lg:text-lg text-[#101750] text-bold">Fees:</p>
                <p className="lg:text-lg text-[#101750] text-bold">
                  $<span>10</span>
                </p>
              </div>

              <div></div>

              <Button
                style="w-full bg-[#19D16F] mt-10 mb-5"
                buttonText="Proceed To Checkout"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
