import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import "../style.css";

export const HeaderAnimation = ({ 
  text, 
  size = 15,
  stroke = 0.5,
  font = "Bagel Fat One",
  color = "#E0A03F",
  shadow = true,
  fontWeight = 400,
  align = "center", // New prop: "left", "center", or "right"
  property1, 
  className 
}) => {
  
  // Logic to handle container positioning and text alignment
  const alignmentMap = {
    left: "text-left mr-auto ml-0",
    center: "text-center mx-auto",
    right: "text-right ml-auto mr-0",
  };

  const selectedAlignment = alignmentMap[align] || alignmentMap.center;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      // 'w-fit' keeps the white box tight. 'selectedAlignment' moves the whole box.
      className={`name-animation ${className} w-fit ${selectedAlignment}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          fontSize: size > 5 ? `${size}vw` : `${size}rem`,
          WebkitTextStroke: `${stroke}vw #9F2B2C`,
          fontFamily: font,
          textShadow: shadow ? "0.5vw 0.5vw 0vw #9F2B2C" : "none",
          color: color,
          fontWeight: fontWeight,
          lineHeight: "1.1", 
          padding: "0.1em 0", 
        }}
        transition={{ delay: 0.4, duration: 1 }}
        // whitespace-pre-line preserves your line breaks
        className={`whitespace-pre-line w-fit h-fit ${selectedAlignment}`}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

HeaderAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  stroke: PropTypes.number, // Fixed: stroke is a number (0.5), not a bool
  shadow: PropTypes.bool,
  color: PropTypes.string,
  font: PropTypes.string,
  fontWeight: PropTypes.number,
  align: PropTypes.oneOf(["left", "center", "right"]), // Added to PropTypes
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
};