import React from "react";

const DeliverySmCard = ({ image, title }) => {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md md:w-56">
        <div className="w-full h-28">
          <img
            src={image}
            alt="food"
            className="w-full h-full rounded-t-md object-cover"
          />
        </div>
        <div>
          <h3 className="text-center text-sm my-1 font-normal">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = ({ image, title }) => {
  return (
    <>
      <div className="hidden lg:block w-64 h-48">
        <div className="w-full h-full">
          <img
            src={image}
            alt="food"
            className="w-full h-full rounded-md object-cover shadow-lg"
          />
        </div>
        <div>
          <h3 className=" text-xl my-1 font-medium">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategory = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCategory;
