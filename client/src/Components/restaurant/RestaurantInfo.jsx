import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const RestaurantInfo = (props) => {
  return (
    <>
      <div className="">
        <div className="flex md:items-center justify-between flex-col-reverse md:flex-row">
          <h1 className="text-2xl md:text-4xl font-semibold md:font-medium">
            {props.name}
          </h1>
          <div className="flex items-center my-4 gap-6 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-white font-medium bg-green-600 py-1 px-2 rounded">
                {props.restaurantRating} <TiStarFullOutline />
              </span>
              <span>
                <strong>67</strong>
                <p className="text-xs border-dashed border-b">Dining Reviews</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-white font-medium bg-green-600 py-1 px-2 rounded">
                {props.deliveryRating} <TiStarFullOutline />
              </span>
              <span>
                <strong>6700</strong>
                <p className="text-xs border-dashed border-b">
                  Delivery Reviews
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="text-lg text-gary-500 font-normal">
          <h3>{props.cuisine}</h3>
          <h3 className="text-gray-400 text-base font-normal">
            {props.address}
          </h3>
          <h3 className="text-base">
            <span className="text-yellow-400">Open Now</span> - 11am - 8pm
          </h3>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
