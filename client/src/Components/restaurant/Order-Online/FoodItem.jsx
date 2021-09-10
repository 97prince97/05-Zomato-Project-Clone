import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsPlus } from "react-icons/bs";

const FoodItem = (props) => {
  return (
    <>
      <div className="flex items-start gap-3 md:px-2">
        <div className="md:w-4/12 lg:h-32 md:24 w-24 w-3/12">
          <img
            src={props.image}
            alt="food"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="md:w-8/12 w-9/12 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">{props.title}</h3>
            <button className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-1 rounded-lg">
              Add
              <BsPlus />
            </button>
          </div>
          <ReactStars count={5} value={props.rating} />
          <h5 className="font-light">{props.price}</h5>
          <p className="truncate font-light text-sm md:text-base">
            {props.description}
          </p>
        </div>
        <div className="hidden md:block md:w-3/12">
          <button className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-1 rounded-lg">
            Add
            <BsPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
