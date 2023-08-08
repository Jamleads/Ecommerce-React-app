import React from "react";

const Showcase = ({ pageTitle }) => {
  return (
    <div className="w-full h-[230px] bg-[#F6F5FF] flex items-center justify-center">
      <div className="lg:w-[70%] mx-auto">
        <h1 className="lg:text-4xl text-[#101750]">{pageTitle}</h1>
        <p className=" mt-2">
          Home / <span className="text-pink">{pageTitle}</span>
        </p>
      </div>
    </div>
  );
};

export default Showcase;
