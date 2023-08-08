import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="text-3xl">Product Cart will be here</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
        cumque nostrum repudiandae, ut voluptatum beatae corrupti molestiae
        itaque eum sapiente architecto. Quaerat dolorem nesciunt omnis
        reiciendis totam porro ipsa!
      </p>

      {JSON.stringify(productCart)}
    </div>
  );
};

export default Cart;
