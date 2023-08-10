import React from "react";
import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import { Provider, observer } from "mobx-react";
import UserStore from "./store/userStore";

import "./index.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import RootLayout from "./Components/RootLayout";
import ProductDetails from "./Components/ProductDetails";

// function App()
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
        <Route></Route>
      </Route>
    )
  );

  return (
    <div className="relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
