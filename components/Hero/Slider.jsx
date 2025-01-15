"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const images = [
  "/assets/Rectangle.png",
  "/assets/Rectangle193.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle193.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle.png",
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="text-white bg-white w-full">
      <div className="">
        {/* Background Image Carousel */}
        <div
          className="h-[350px] md:h-[450px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={prevImage}>
            <img src="/assets/Path2.png" alt="previous-button" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={nextImage}>
            <img src="/assets/Path1.png" alt="next-button" />
          </button>
        </div>

        

        {/* Circular Progress Bar and Price */}
        <div className="absolute bottom-14 flex justify-between w-[100%] px-6">
         
          <div className="flex flex-col">
            <div className="flex justify-between text-white">
              <p className="text-[10px] md:text-[14px] tracking-widest">£5,000,000 GBP</p>
              <img src="/assets/g12.png" alt="logo" className="px-1 w-16 md:w-20" />
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`cursor-pointer mx-1 h-0.5 w-6 md:w-8 ${
                    index === currentImageIndex ? "bg-gold" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        
      </div>

      
    </div>
  );
};

export default Slider;