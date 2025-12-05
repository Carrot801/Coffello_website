import React from "react";

export const Box = () => (
  <div className="relative w-full h-[119px] overflow-hidden">
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1440 119"
      preserveAspectRatio="xMinYMin meet"
      fill="none"
    >
      <defs>
        {/* First pattern */}
        <pattern id="pattern1" patternUnits="userSpaceOnUse" width="60" height="60">
          <rect width="30" height="30" fill="#9F2B2C" />
        </pattern>
        {/* Second pattern for staggered effect */}
        <pattern id="pattern2" patternUnits="userSpaceOnUse" width="60" height="60">
          <rect width="30" height="30" fill="#9F2B2C" />
        </pattern>
      </defs>

      <rect width="1800" height="119" fill="url(#pattern1)" />

      <rect width="1800" height="119" fill="url(#pattern2)" transform="translate(30 30)" />
    </svg>
  </div>
);
