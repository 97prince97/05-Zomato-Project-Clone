import React from "react";
import { FaUser, FaCaretDown } from "react-icons/fa";
import { HiLocationMarker, HiOutlineArrowLeft } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const MobileNav = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-2">
        <div className="flex items-center">
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
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zomato-400 text-white text-xs font-medium py-2 px-2.5 rounded-full">
            Use App
          </button>
          <span className="border p-1.5 border-gray-300 text-lg text-zomato-300 rounded-full">
            <FaUser />
          </span>
        </div>
      </div>
    </>
  );
};

const LargeNav = () => {
  return (
    <>
      <div className="container mx-auto px-52">
        <div className="flex items-center gap-5 w-full">
          <div className="flex items-center w-full gap-6">
            <div className="w-32">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="w-3/4 bg-white shadow-md flex gap-3 px-2 py-3 border border-gray-200 rounded">
              <div className="flex items-center gap-1 border-r-2 border-gray-300 pr-1">
                <span className="text-zomato-300 text-2xl">
                  <HiLocationMarker />
                </span>
                <input
                  type="text"
                  placeholder="Agra"
                  className=" focus:outline-none"
                />
                <FaCaretDown />
              </div>
              <div className="flex items-center w-full">
                <span className="text-gray-500 pr-2 text-xl">
                  <FiSearch />
                </span>
                <input
                  type="search"
                  placeholder="Search for restaurant, cuisine or a dish"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center w-48">
            <div className="flex gap-9 w-full">
              <button className="text-gray-400 hover:text-gray-600 text-lg tracking-wide">
                Log in
              </button>
              <button className="text-gray-400 hover:text-gray-600 text-lg tracking-wide">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="py-3 px-0 flex bg-white items-center shadow-md lg:shadow-none">
        <div className="lg:hidden w-full">
          <MobileNav />
        </div>
        <div className="hidden lg:flex lg:w-full">
          <LargeNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
