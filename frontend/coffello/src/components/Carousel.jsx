import React from "react";

export const Carousel = ({ image, background }) => {
  return (
    <div
      className="relative flex w-[350px] h-[500px] items-center justify-center rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img
        src={image}
        alt="sale"
        className="w-[70%] h-full object-contain p-4 relative z-10"
        draggable="false"
      />
      {/* Optional overlay to make image pop */}
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
    </div>
  );
};
