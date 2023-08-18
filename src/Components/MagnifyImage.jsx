import React from "react";

const MagnifyImage = ({ image, closeMag }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute top-10 right-5 py-2 px-5 cursor-pointer bg-pink text-white font-bold"
        onClick={closeMag}
      >
        Close
      </div>
      <img src={image} alt="" width="100%" />
    </div>
  );
};

export default MagnifyImage;
