import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import "../style.css";

export const HeaderAnimation = ({ text, 
  size = 15,
  stroke = 0.5,
  font = "Bagel Fat One",
  color = "#E0A03F",
  shadow = true,
  fontWeight= 400,
  property1, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className={`name-animation ${property1} ${className } `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          fontSize: `${size}vw`,
          WebkitTextStroke: `${stroke}vw #9F2B2C`,
          fontFamily: font,
          textShadow: shadow ? "0.5vw 0.5vw 0vw #9F2B2C" : "none",
          color: color,
          fontWeight: fontWeight,
        }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
  className="text-wrapper whitespace-pre text-center w-full"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

HeaderAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  stroke: PropTypes.bool,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  font: PropTypes.string,
  fontWeight: PropTypes.number,
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
};
