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
  auctions,
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
                  <span className="">
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
              {/* Map over auction values */}
              {Object.values(auctions).map((location, idx) => (
                <p key={idx}>{location}</p>
              ))}
            </div>
          </div>
        </div>
      </a>

      <div className="px-4 py-4 flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-800">
          <label className="block text-gray-500">Latest bid</label>
          <span className="block text-lg text-gray-900">US$75,000</span>
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


// import React from "react";
// import Timer from "./Timer";
// import StarIcon from "./StarIcon";

// const Card = () => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Favorite Icon */}
//       <div className="absolute top-2 right-2 flex items-center space-x-2">
//         <div className="flex items-center space-x-1">
//           <svg
//             id="star-2"
//             data-name="star-2"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 763.43 728.41"
//             className="w-8 h-8 stroke-white"
//           >
//             <defs>
//               <style>
//                 {`
//                   .st0 {
//                     fill: none;
//                     stroke: #fff;
//                     stroke-miterlimit: 133.33;
//                     stroke-width: 40px;
//                   }
//                 `}
//               </style>
//             </defs>
//             <g id="star-1" data-name="star-1">
//               <path
//                 className="st0"
//                 d="M385.29,22.2l110.12,218.32c.58,1.15,1.68,1.96,2.96,2.15l241.67,37.26c3.24.5,4.54,4.48,2.21,6.79l-173.61,172.2c-.92.91-1.34,2.21-1.13,3.48l39.24,241.35c.53,3.24-2.86,5.7-5.78,4.2l-217.42-111.9c-1.15-.59-2.51-.59-3.66,0l-217.42,111.9c-2.92,1.5-6.31-.96-5.78-4.2l39.24-241.35c.21-1.28-.21-2.57-1.13-3.48L21.19,286.73c-2.33-2.31-1.04-6.29,2.21-6.79l241.67-37.26c1.28-.2,2.38-1,2.96-2.15L378.14,22.2c1.48-2.93,5.66-2.93,7.14,0Z"
//               />
//             </g>
//           </svg>
//           <span className="text-white">43</span>
//         </div>
//       </div>

//       {/* Car Image and Link */}
//       <a
//         href="/listing/217/2022-lotus-exige-sport-420-final-edition"
//         className="block"
//       >
//         <div className="relative">
//           <img
//             src="https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/DSC_3447.jpg"
//             alt="2022 Lotus Exige Sport 420 Final Edition Thumbnail"
//             className="w-full h-auto object-cover"
//           />
//           <div className="absolute top-2 p-4 w-[100%]">
//             <div className="flex justify-between items-center">
//               <div className=" bg-gray-800 text-black pl-2 py-1">
//                 <span className="bg-white px-2 py-2 text-sm">
//                   Reserve Lowered
//                 </span>
//               </div>
//               <div className=" bg-gray-800 text-black px-2 py-1">
//                 <span className="">
//                   <StarIcon />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Car Details */}
//         <div className="absolute bottom-20 p-4 w-[100%]">
//           <div className="flex justify-between items-center">
//             <div>
//               <span className="text-sm text-gray-500">2022</span>
//               <h3 className="text-xl font-bold">Lotus</h3>
//               <span className="text-sm text-gray-500">
//                 Exige Sport 420 Final Edition
//               </span>
//             </div>
//             <div>
//               <span className="text-sm font-semibold text-end">
//                 <p>Abu Dhabi</p>
//                 <p>United Arab</p>
//                 <p>Emirates</p>
//               </span>
//             </div>
//           </div>
//         </div>
//       </a>

//       {/* Car Content - Price and Time */}
//       <div className="px-4 py-4 flex justify-between items-center">
//         <div className="text-sm font-semibold text-gray-800">
//           <label className="block text-gray-500">Latest bid</label>
//           <span className="block text-lg text-gray-900">US$75,000</span>
//         </div>
//         <div className="text-sm font-semibold text-gray-800">
//           <label className="block text-gray-500">Time left</label>

//           <Timer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
