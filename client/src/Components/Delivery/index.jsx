import React, { useState } from "react";

// Components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "1234",
      photos: [
        "https://b.zmtcdn.com/data/pictures/7/19582617/59c505a538cc35964aa9e76a1ef8fba4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Dragon Ball",
      cuisine: ["Fast Food", "Chinese"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 40,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "1234-2",
      photos: [
        "https://b.zmtcdn.com/data/pictures/2/3400922/ac35d275b1602ecb08ee1165e981dfbe.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "fnpCakes ‘n’ More",
      cuisine: ["Bakery", "Desserts"],
      averageCost: 150,
      isPro: false,
      isOff: 75,
      durationOfdelivery: 30,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "1234-3",
      photos: [
        "https://b.zmtcdn.com/data/pictures/3/3401813/299a3962ea1ca2971cdc718411b13890.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "New Agra Fast Food & Restaurant",
      cuisine: ["North Indian", "Fast Food"],
      averageCost: 100,
      isPro: true,
      isOff: 75,
      durationOfdelivery: 35,
      restaurantReviewValue: 3.6,
    },
  ]);
  return (
    <>
      <DeliveryCarousel />
      {/* <Brand /> */}
      <div className="flex flex-wrap justify-between">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
