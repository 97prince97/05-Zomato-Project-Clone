import React from "react";
import { FaUser } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";

const CheckoutNavbar = () => {
  return (
    <>
      <nav className="py-3 px-0 w-full flex bg-white items-center shadow-md lg:shadow-none">
        <div className="container px-4 md:px-52 mx-auto">
          <div className="flex w-full items-center justify-between">
            <span className="text-xl">
              <HiOutlineArrowLeft />
            </span>
            <div className="w-24 ml-4">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="border flex items-center gap-2 p-1.5 border-gray-300 text-lg text-zomato-300 rounded-full">
                <FaUser />
              </span>
              Prince
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CheckoutNavbar;
