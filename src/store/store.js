import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import favouriteSlice from "./favouriteSlice";
import magnifySlice from "./magnifySlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    favourite: favouriteSlice,
    magnify: magnifySlice,
  },
});

export default store;
