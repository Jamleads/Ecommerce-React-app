import React from "react";

const Button = ({ buttonText, style }) => {
  return (
    <button className={`px-8 py-3 bg-pink text-mainWhite ${style}`}>
      {buttonText}
    </button>
  );
};

export default Button;
