import React from "react";
import Card from "./Card";

const cars = [
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/DSC_3447.jpg",
    carName: "Lotus Exige",
    carYear: "2022",
    carDetails: "Sport 420 Final Edition",
    reserved: 1,
    favorite: 43,
    Auctions: { location1: "Abu Dhabi", location2: "United Arab Emirates" },
    carPrice: "US$200,000",
    bidEndTime: "2025-01-31T23:59:59", // Dynamic end time for the bid
  },
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/a547a6b6-3704-49d8-83e7-4558ebffa398/Car%20card.jpg",
    carName: "Porsche 911",
    carYear: "2021",
    carDetails: "Turbo S",
    reserved: 0,
    favorite: 87,
    Auctions: { location1: "Abu Dhabi", location2: "United Arab", location3: "London" },
    carPrice: "25,000 AED",
    bidEndTime: "2025-01-30T20:00:00", // Another dynamic end time
  },
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/DSC_3447.jpg",
    carName: "Ferrari F8",
    carYear: "2020",
    carDetails: "Tributo",
    reserved: 0,
    favorite: 48,
    Auctions: { location1: "Abu Dhabi", location2: "United Arab" },
    carPrice: "US$55,000",
    bidEndTime: "2025-01-17T15:30:00", // Another dynamic end time
  },
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/DSC_3447.jpg",
    carName: "Lamborghini Huracan",
    carYear: "2019",
    carDetails: "Evo AWD",
    reserved: 1,
    favorite: 23,
    Auctions: { location1: "USA", location2: "Emirates" },
    carPrice: "€350,000",
    bidEndTime: "2025-01-29T18:45:00", // Another dynamic end time
  },
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/DSC_3447.jpg",
    carName: "Lotus Exige",
    carYear: "2022",
    carDetails: "Sport 420 Final Edition",
    reserved: 1,
    favorite: 43,
    Auctions: { location1: "Abu Dhabi", location2: "United Arab Emirates" },
    carPrice: "US$200,000",
    bidEndTime: "2025-01-31T23:59:59", // Dynamic end time for the bid
  },
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/DSC_3447.jpg",
    carName: "Porsche 911",
    carYear: "2021",
    carDetails: "Turbo S",
    reserved: 0,
    favorite: 87,
    Auctions: { location1: "Abu Dhabi", location2: "United Arab", location3: "London" },
    carPrice: "25,000 AED",
    bidEndTime: "2025-01-30T20:00:00", // Another dynamic end time
  },
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/e293e549-fd95-4122-9fcf-741b8faec9ec/DSC_3447.jpg",
    carName: "Ferrari F8",
    carYear: "2020",
    carDetails: "Tributo",
    reserved: 0,
    favorite: 48,
    Auctions: { location1: "Abu Dhabi", location2: "United Arab" },
    carPrice: "US$55,000",
    bidEndTime: "2025-01-17T15:30:00", // Another dynamic end time
  },
  {
    imageUrl:
      "https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80,format=webp,fit=cover/auctions/a547a6b6-3704-49d8-83e7-4558ebffa398/Car%20card.jpg",
    carName: "Lamborghini Huracan",
    carYear: "2019",
    carDetails: "Evo AWD",
    reserved: 1,
    favorite: 23,
    Auctions: { location1: "USA", location2: "Emirates" },
    carPrice: "€350,000",
    bidEndTime: "2025-01-29T18:45:00", // Another dynamic end time
  },
];


function Main() {
  return (
    <div className="2xl:px-[4rem] desktop:px-[16rem]">
      <section className="flex items-center gap-[8px] py-[1.5rem] px-4 sm:px-8 text-[#101010]">
        <h3 className="text-[18px] font-bold">AUCTIONS </h3>
        <p className="cursor-pointer">Country: <span className="underline hover:text-[#5fb7cf]">ALL</span> </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8">
        {cars.map((car, index) => (
          <Card
            key={index}
            imageUrl={car.imageUrl}
            carName={car.carName}
            carYear={car.carYear}
            carDetails={car.carDetails}
            reserved={car.reserved}
            favorite={car.favorite}
            auctionLocations={car.Auctions ? Object.values(car.Auctions) : []}
            carPrice={car.carPrice}
            bidEndTime={car.bidEndTime} // Pass the bidEndTime
          />
        ))}
      </section>
    </div>
  );
}

export default Main;




