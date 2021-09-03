import React from "react";

const NutritionSmCard = ({ image, title }) => {
  return (
    <>
      <div className="bg-white shadow rounded-md w-28 md:w-64 px-0 md:px-3 py-1 md:p-2">
        <div className="w-full h-16 md:h-36 md:p-2">
          <img src={image} alt="food" className="w-full h-full rounded-t-md" />
        </div>
        <div>
          <h3 className="text-center text-sm my-1 font-light md:text-xl md:py-3">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

const NutritionCarouselCard = (props) => {
  return (
    <>
      <NutritionSmCard {...props} />
    </>
  );
};

export default NutritionCarouselCard;
