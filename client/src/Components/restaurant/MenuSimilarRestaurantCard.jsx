import React from "react";
import { TiStar } from "react-icons/ti";

const MenuSimilarRestaurantCard = (props) => {
  return (
    <>
      <div className="mx-2">
        <div className="bg-white shadow rounded-md">
          <div className="w-full h-48">
            <img
              src={props.image}
              alt="food"
              className="w-full h-full rounded-t-md "
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h3 className="text-xl mt-1 font-medium">{props.title}</h3>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm">
                <span className="flex items-center gap-0 bg-green-600 text-white px-1.5 py-px rounded">
                  3.4
                  <TiStar />
                </span>
                Dining
              </span>
              <span className="w-2 h-6 border-r border-gray-500"></span>
              <span className="flex items-center gap-1 text-sm">
                <span className="flex items-center gap-1 bg-green-600 text-white  px-1.5 py-px rounded">
                  3.5
                  <TiStar />
                </span>
                Delivery
              </span>
            </div>
            <h4 className="font-normal">Pizza, Fast Food, Beverages</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSimilarRestaurantCard;
