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
  auctionLocations, // Renamed from auctions to auctionLocations
  carPrice,
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
              <div className="bg-gray-800 text-black px-2 py-2 rounded-3xl">
                <div className="flex items-center space-x-2">
                  <span>
                    <StarIcon />
                  </span>
                  <span className="text-white text-[15px]">{favorite}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 p-4 w-[100%]">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-500">{carYear}</span>
              <h3 className="text-xl font-bold">{carName}</h3>
              <span className="text-sm text-gray-500">{carDetails}</span>
            </div>
            <div className="text-sm font-semibold text-end">
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

      <div className="px-4 py-4 flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-800">
          <label className="block text-gray-500">Latest bid</label>
          <span className="block text-lg text-gray-900">{carPrice}</span>
        </div>
        <div className="text-sm font-semibold text-gray-800">
          <label className="block text-gray-500">Time left</label>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Card;



