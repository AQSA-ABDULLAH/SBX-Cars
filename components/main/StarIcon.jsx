"use client";
import React from "react";

const StarIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 763.43 728.41"
        className="w-2 h-2 md:w-5 md:h-5"
        role="img"
        aria-labelledby="star-title star-desc"
      >
        <title id="star-title">Star Icon</title>
        <desc id="star-desc">A decorative star icon.</desc>
        <style>
          {`
            .st0 {
              fill: none;
              stroke: #fff; /* Change stroke color if needed */
              stroke-miterlimit: 133.33;
              stroke-width: 40px;
            }
          `}
        </style>
        <g>
          <path
            className="st0"
            d="M385.29,22.2l110.12,218.32c.58,1.15,1.68,1.96,2.96,2.15l241.67,37.26c3.24.5,4.54,4.48,2.21,6.79l-173.61,172.2c-.92.91-1.34,2.21-1.13,3.48l39.24,241.35c.53,3.24-2.86,5.7-5.78,4.2l-217.42-111.9c-1.15-.59-2.51-.59-3.66,0l-217.42,111.9c-2.92,1.5-6.31-.96-5.78-4.2l39.24-241.35c.21-1.28-.21-2.57-1.13-3.48L21.19,286.73c-2.33-2.31-1.04-6.29,2.21-6.79l241.67-37.26c1.28-.2,2.38-1,2.96-2.15L378.14,22.2c1.48-2.93,5.66-2.93,7.14,0Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default StarIcon;
