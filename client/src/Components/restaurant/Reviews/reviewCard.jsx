import React from "react";
import { TiStar } from "react-icons/ti";

const ReviewCard = () => {
  return (
    <>
      <div className=" my-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-normal">Thefoodieshub</h3>
              <small className=" text-gray-500">
                5 Reviews &#8226; 5 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center text-xs font-medium text-white bg-green-700 px-2 py-1 rounded-lg">
              3 <TiStar />
            </span>
            <h5 className="font-normal text-gray-700 uppercase text-xs">
              Delivery
            </h5>
            <small className="text-gray-500">3 days ago</small>
          </div>
          <p className="w-full text-gray-600 font-normal">
            Classic Pizza starting frm Rs. 59 is Most Worth Pizza base was fresh
            and medium thin , u need not to chew it like dominoz and
            otherClassic Pizza starting frm Rs. 59 is Most Worth Pizza base was
            fresh and medium thin , u need not to chew it like dominoz and other
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
