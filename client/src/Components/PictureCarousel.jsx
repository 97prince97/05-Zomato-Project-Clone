import React from "react";
import { BiCaretRight } from "react-icons/bi";

const PictureCarouselCard = () => {
  return (
    <>
      <div className="w-full h-80 relative px-4">
        <div className=" w-full h-full relative">
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/4/3400934/be63715a662d65f12381b40136a7ff78_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            alt="food"
            className="w-full h-full object-cover tansition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="absolute inset-0 w-full h-full rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className=" absolute bottom-2 left-8 text-white w-full">
          <h4 className="z-10">Onam Special</h4>
          <h6 className="z-10 flex items-center">
            23 Places <BiCaretRight />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
