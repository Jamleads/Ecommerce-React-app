import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import favouriteSlice from "./favouriteSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    favourite: favouriteSlice,
  },
});

export default store;
