import React, { useState } from "react";
import overlay1 from "../images/Drinks/overlay.png"; // adjust path
import expresso from "../images/Drinks/expresso.png"; // adjust path

const FlippableCard = ({
  cardColor = "#FEF3B1",
  outlineColor = "#355D67",
  innerGradientStart = "#FEF3B1",
  innerGradientEnd = "#355D67",
  text = "Espresso",
  price = "3$",
  Kcal = "150 Kcal",
  ingredients = [],
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped((prev) => !prev);

  return (
    <div
      className="perspective-1000 cursor-pointer w-[336px] h-[406px] z-10"
      onClick={handleClick}
    >
      {/* Flip wrapper */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d`}
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT SIDE (exact same as your card) */}
        <div className="absolute w-full h-full backface-hidden top-0 left-0">
          <div className="card flex w-full h-full rounded-2xl overflow-hidden"
            style={{
              background: cardColor,
              outline: `7px solid ${outlineColor}`,
            }}>
            <div className="card-background items-center justify-center flex relative w-full h-full"
              style={{
                  background: `radial-gradient(66.67% 66.67% at 50% 50%, ${innerGradientStart} 35.58%, ${innerGradientEnd} 100%)`,
                }}
            >
              <img
                src={overlay1}
                className="absolute rounded-2xl w-full h-full object-cover mix-blend-screen z-10"
                alt=""
              />
              <img
                src={expresso}
                alt=""
                className="relative z-10"
              />
            </div>
            <div className="card-text-container">
              <svg viewBox="0 0 auto 45">
                <text
                  x="0"
                  y="30"
                  fontFamily="Simonetta"
                  fontSize="36"
                  fontWeight="900"
                  fill="#E0A03F"
                  stroke="#9F2B2C"
                  strokeWidth="2"
                  paintOrder="stroke"
                >
                  {text}
                </text>
              </svg>
              <svg viewBox="0 0 auto 45">
                <text
                  x="100%"
                  y="30"
                  textAnchor="end"
                  fontFamily="Simonetta"
                  fontSize="36"
                  fontWeight="900"
                  fill="#E0A03F"
                  stroke="#9F2B2C"
                  strokeWidth="2"
                  paintOrder="stroke"
                >
                  {price}
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          style={{
              outline: `7px solid ${outlineColor}`,
          }} 
          className="absolute w-full h-full backface-hidden rotate-y-180 top-0 left-0 rounded-2xl overflow-hidden">

          {/* INGREDIENTS */}
          <div className="w-full h-full flex items-center justify-center bg-[#FEF3B1] rounded-2xl text-center p-6">
             <img
                src={overlay1}
                className="absolute rounded-2xl w-full h-full object-cover mix-blend-screen z-10"
                alt=""
              />
            {ingredients.length > 0 ? (
              <ul className="list-disc list-inside">
                {ingredients.map((ingredient, index) => (
                   <div className="font-['Simonetta'] text-[40px]  text-[#9F2B2C] font-black" key={index}>
                      {ingredient}
                  </div>

                ))}
              </ul>
            ) : (
              <p>No ingredients available</p>
            )}
          </div>
          {/* KALORIES */}
          <div className="top-[15px] right-[15px] absolute font-['Simonetta'] text-[24px]  text-[#9F2B2C] font-black">
            {Kcal}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
