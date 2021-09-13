import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
// Components
import FoodItem from "../Components/Cart/FoodItem";
import Addresslist from "../Components/Checkout/AddressList";

const Checkout = () => {
  const address = [
    { name: "Home", address: "India" },
    { name: "Gym", address: "India" },
    { name: "Office", address: "India" },
  ];
  return (
    <div className="my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold uppercase">
        Checkout
      </h1>
      <div className="w-full md:w-3/5 rounded-lg shadow-lg bg-gray-50 flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="w-full flex flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex flex-col items-center text-gray-500">
            <h4 className="">Domino's Pizza</h4>
            <small>GT world Mall, Deori Road, Agra</small>
          </div>
          <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
            <FoodItem name="Pizza" quantity={3} price={100} />
            <FoodItem name="Pizza" quantity={3} price={100} />
            <FoodItem name="Pizza" quantity={3} price={100} />
          </div>
          <div className="my-4 flex flex-col gap-3 w-full md:w-3/5">
            <h4 className="text-xl font-normal">Choose Address :-</h4>
            <Addresslist address={address} />
          </div>
        </div>
        <button className="flex items-center gap-2 my-4 justify-center md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
          Pay Securely <IoShieldCheckmarkSharp />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
