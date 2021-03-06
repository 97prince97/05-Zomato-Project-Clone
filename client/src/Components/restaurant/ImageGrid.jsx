import React from "react";
import { BiCamera } from "react-icons/bi";

const ImageGrid = (props) => {
  return (
    <>
      <div className="w-full h-60 md:hidden">
        <img
          src={props.images[0]}
          alt="restaurant image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="hidden w-full h-96 md:flex gap-2">
        <div className="w-full h-full overflow-hidden">
          <img
            src={props.images[0]}
            alt="restaurant image"
            className="w-full h-full  object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-2 overflow-hidden">
          <img
            src={props.images[1]}
            alt="restaurant image"
            className="w-full h-full  object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
          <img
            src={props.images[2]}
            alt="restaurant image"
            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-2 overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src={props.images[3]}
              alt="restaurant image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-40 rounded-lg bg-black w-full h-full" />
            <h4 className="absolute inset-y-2/4 z-20 w-full h-full text-center text-white font-semibold">
              View Gallery
            </h4>
          </div>
          <div className="w-full h-full relative">
            <img
              src={props.images[4]}
              alt="restaurant image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-opacity-90 rounded-lg bg-gray-400 w-full h-full" />
            <div className="absolute flex flex-col items-center inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
              <div className="bg-black p-3 rounded-full bg-opacity-50 ">
                <BiCamera />
              </div>
              <h4>View Gallery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
