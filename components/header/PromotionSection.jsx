"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const PromotionSection = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleClose = () => {
    setIsVisible(false); // Hide the section when the close button is clicked
  };

  return (
    <>
      {isVisible && ( // Only render the section if isVisible is true
        <section className="px-4 py-2 flex items-center bg-[#5fb7cf] text-black font-medium min-h-[36px] tracking-wide">
          <div className="flex flex-1 justify-center align-center">
            <a
              className="promotion-link flex items-center space-x-2"
              href="https://sbxcars.com/sell-your-vehicle"
            >
              <span className="text-[16px]">Sell Your Supercar</span>
              <div className="image-wrapper">
                <MdOutlineKeyboardArrowRight />
              </div>
            </a>
          </div>

          <button type="button" className="base-button p-0 no-border" onClick={handleClose}>
            <div className="image-wrapper">
              <RxCross2 />
            </div>
          </button>
        </section>
      )}
    </>
  );
};

export default PromotionSection;

