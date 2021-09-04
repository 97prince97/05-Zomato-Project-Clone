import React from "react";
import { BiFoodTag } from "react-icons/bi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
  return (
    <div className="w-full h-full p-3.5 md:w-1/2 lg:w-1/3">
      <div className="bg-white w-full rounded-2xl shadow-lg ">
        <div className={`w-full h-52 bg-${props.bg}-100 rounded-t-2xl`}>
          <img
            src={props.image}
            alt="supplements"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="flex items-center gap-3 mt-px">
            <span className="text-green-400 w-3 h-3">
              <BiFoodTag />
            </span>
            <ReactStars
              count={5}
              //   onChange={ratingChanged}
              size={20}
              isHalf={true}
              value={3}
              emptyIcon={<BsStar />}
              halfIcon={<BsStarHalf />}
              fullIcon={<BsStarFill />}
              activeColor="#ffd700"
            />
            <span className="text-gray-400 w-5 h-5">15</span>
          </div>
          <h3 className="text-xl font-semibold">
            Sleep - Timed Release Melatonin
          </h3>
          <p className="font-light">
            An advanced timed-release formula that helps you fall asleep faster
            and wake up feeling fresher.
          </p>
          <div className="my-2">
            <hr />
          </div>
          <div>
            <span>
              <s className="text-gray-400 font-light mr-2">₹500</s>
              <strong>₹125</strong>
            </span>
            <p className="font-light">monthly pack - 30 tablets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
