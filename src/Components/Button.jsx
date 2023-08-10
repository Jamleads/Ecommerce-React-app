import React from "react";

const Button = ({ buttonText, style, onClick }) => {
  return (
    <button
      className={`px-8 py-3 bg-pink text-mainWhite ${style}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
