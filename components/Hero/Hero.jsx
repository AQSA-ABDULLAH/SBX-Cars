"use client";

import React, { useState } from "react";

const carData = [
  {
    image: "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/324d9d40-d49a-4c1b-954a-f43aacbb2d39/Senna%20banner.jpg",
    year: "2018",
    name: "Aston Martes",
    model: "Bronco Development Vehicle 001",
  },
  {
    image: "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/a3bdb4e3-1802-4170-8998-946c4c3468e2/G-wagon-1.jpg",
    year: "2021",
    name: "Mercedes G-Wagon",
    model: "Luxury Edition",
  },
  {
    image: "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/4cb8038d-b69b-453f-a084-2cee6b0183a7/2020%20Aston%20Martin%20DBS%20Superleggera_banner.jpg",
    year: "2020",
    name: "Aston Martin DBS",
    model: "Superleggera",
  },
  {
    image: "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/banner.jpg",
    year: "2019",
    name: "Lamborghini Huracán",
    model: "Evo Spyder",
  },
  {
    image: "https://i.sbxcars.com/cdn-cgi/image/width=1500,height=900,quality=80,format=webp,fit=cover/auctions/21d2d4c6-e6ea-4533-859e-89f7afc7fe7f/Porsche%20Speedster%20banner.jpg",
    year: "2023",
    name: "Porsche Speedster",
    model: "Limited Edition",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + carData.length) % carData.length
    );
  };

  const { image, year, name, model } = carData[currentImageIndex];

  return (
    <div className="text-white bg-white w-full px-4 2xl:px-[8rem] desktop:px-[16rem]">
      {/* Background Image Carousel */}
      <div
        className="h-[460px] 2xl:h-[560px] desktop:h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-[12rem] left-16 transform -translate-y-1/2">
        <button className="rounded-full text-white" onClick={prevImage}>
          <img src="/assets/Path2.png" alt="previous-button" />
        </button>
      </div>
      <div className="absolute bottom-[12rem] right-16 transform -translate-y-1/2">
        <button className="rounded-full text-white" onClick={nextImage}>
          <img src="/assets/Path1.png" alt="next-button" />
        </button>
      </div>

      <div className="absolute bottom-8 w-[97.5%] px-[50px]">
        <div className="flex justify-between items-end">
          <div className="text-[#FFFFFFB3] uppercase font-400 leading-[40px]">
            <span className="text-[28px]">{year}</span>
            <h3 className="text-[40px]">{name}</h3>
            <span className="text-[16px]">{model}</span>
          </div>
          <div>
            <button className="bg-[#f0f0f0] text-[#656565] px-[35px] py-[16px]">
              BID NOW
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-1 px-[50px]">
        <div className="flex justify-center mt-4">
          {carData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`cursor-pointer mx-1 h-1 w-6 md:w-9 ${
                index === currentImageIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

