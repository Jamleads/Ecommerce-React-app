import React from "react";
import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import { observer } from "mobx-react";

import "./index.css";
import Nav from "./Components/Nav";
import UserStore from "./store/userStore";
import Home from "./Components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";

// function App()
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route></Route>
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
