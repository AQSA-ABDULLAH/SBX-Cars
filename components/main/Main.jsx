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
  },
];

function Main() {
  return (
    <div className="py-20 2xl:px-[4rem] desktop:px-[16rem]">
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
            auctionLocations={car.Auctions ? Object.values(car.Auctions) : []} // Fallback to an empty array
            carPrice={car.carPrice}
          />
        ))}
      </section>
    </div>
  );
}

export default Main;



