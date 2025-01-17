import React from "react";
import Timer from "./Timer";
import StarIcon from "./StarIcon";

const Card = ({
  imageUrl,
  carName,
  carYear,
  carDetails,
  reserved,
  favorite,
  auctionLocations,
  carPrice,
  bidEndTime, // Accept bidEndTime as a prop
}) => {
  return (
    <div className="relative overflow-hidden">
      <a
        href="/listing/217/2022-lotus-exige-sport-420-final-edition"
        className="block"
      >
        <div className="relative">
          <img
            src={imageUrl}
            alt={`${carName} Thumbnail`}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-2 p-4 w-[100%]">
            <div className="flex justify-between items-center">
              {reserved === 1 ? (
                <div className="bg-gray-800 text-black pl-2 py-1">
                  <span className="bg-white px-2 py-2 text-sm">
                    Reserve Lowered
                  </span>
                </div>
              ) : (
                <span></span>
              )}
              <div className="bg-gray-800 text-black px-2 py-2 rounded-2xl">
                <div className="flex items-center space-x-3 tracking-[1px]">
                  <span>
                    <StarIcon />
                  </span>
                  <span className="text-white text-[15px] font-bold">{favorite}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 p-4 w-[100%]">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[16px] text-[#FFFFFFB3]">{carYear}</span>
              <h3 className="text-[20px] text-[#FFFFFF] font-bold">{carName}</h3>
              <span className="text-sm text-[#FFFFFFB3]">{carDetails}</span>
            </div>
            <div className="text-[15px] text-[#FFFFFFD9] font-normal text-end">
              {auctionLocations && auctionLocations.length > 0 ? (
                auctionLocations.map((location, idx) => (
                  <p key={idx}>{location}</p>
                ))
              ) : (
                <p>No auction locations available</p>
              )}
            </div>
          </div>
        </div>
      </a>

      <div className="px-4 py-4 flex justify-between items-center tracking-wide">
        <div className="text-[16px] flex flex-col gap-[1px]">
          <label className="text-[#A1A1A1]">Latest bid</label>
          <span className="text-[22px] text-[#101010] font-bold">{carPrice}</span>
        </div>
        <div className="text-[16px] flex flex-col gap-[1px]">
          <label className="text-[#A1A1A1]">Time left</label>
          <Timer bidEndTime={bidEndTime} />
        </div>
      </div>
    </div>
  );
};

export default Card;