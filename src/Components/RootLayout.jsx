import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Nav />

        <main className="mt-[124px]">
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
