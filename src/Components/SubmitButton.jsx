import React from "react";
import userIcon from "/assets/user-icon.svg";

const SubmitButton = ({ logInOut, style }) => {
  return (
    <button className={`logInOut flex ${style}`}>
      <p className="text-base text-offWhite">{logInOut}</p>
      <img src={userIcon} alt="user-icon" className="ml-2 mt-1" />
    </button>
  );
};

export default SubmitButton;
