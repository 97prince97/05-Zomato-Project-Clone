import React from "react";

// Components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div>
        <h2 className="sticky top-0 bg-white w-full md:px-2 py-1 z-10 text-2xl font-semibold">
          {props.title}
        </h2>
        <div className="flex flex-col py-4 gap-8">
          {props.items.map((item) => (
            <FoodItem {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;
