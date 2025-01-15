"use client";

import React, { useState } from "react";

const images = [
  "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/324d9d40-d49a-4c1b-954a-f43aacbb2d39/Senna%20banner.jpg",
  "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/a3bdb4e3-1802-4170-8998-946c4c3468e2/G-wagon-1.jpg",
  "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/4cb8038d-b69b-453f-a084-2cee6b0183a7/2020%20Aston%20Martin%20DBS%20Superleggera_banner.jpg",
  "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/banner.jpg",
  "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/324d9d40-d49a-4c1b-954a-f43aacbb2d39/Senna%20banner.jpg",
  "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/21d2d4c6-e6ea-4533-859e-89f7afc7fe7f/Porsche%20Speedster%20banner.jpg",
  "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/a3bdb4e3-1802-4170-8998-946c4c3468e2/G-wagon-1.jpg",
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className="absolute bottom-14 flex justify-between w-full px-6">
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
  );
};

export default Slider;

