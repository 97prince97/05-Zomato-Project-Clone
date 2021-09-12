import React, { useState } from "react";
import { FaCaretRight, FaCaretUp, FaRegCaretSquareUp } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

// Component
import FoodItem from "./FoodItem";

const CartSm = ({ toggle }) => {
  return (
    <>
      <div className="md:hidden flex items-center justify-between">
        <div className="flex flex-col items-start">
          <small className="flex items-center gap-1 uppercase" onClick={toggle}>
            1 Item
            <FaCaretUp />
          </small>
          <h4>
            ₹300 <sub>(plus tax)</sub>
          </h4>
        </div>
        <button className="flex items-center gap-1 bg-zomato-300 px-16 py-2 text-white font-light text-lg rounded-lg">
          Continue
          <FaCaretRight />
        </button>
      </div>
    </>
  );
};

const CartLg = ({ toggle }) => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between container px-48 mx-auto font-medium">
        <div className="flex items-center gap-2 text-lg">
          <span className="flex items-center gap-1 uppercase" onClick={toggle}>
            <FaRegCaretSquareUp />
          </span>
          <h4>Your Order (1)</h4>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-lg">Subtotal: ₹300</h4>
          <button className="flex items-center gap-1 bg-zomato-300 px-8 py-2 text-white font-light text-lg rounded-lg">
            Continue
            <FaCaretRight />
          </button>
        </div>
      </div>
    </>
  );
};

const CartContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);
  return (
    <>
      {isOpen && (
        <div className="fixed w-full overflow-y-scroll h-60 bg-white z-40 p-2 px-3 bottom-16">
          <div className="flex items-center justify-between text-xl font-medium">
            <h3>Your Order</h3>
            <IoCloseSharp onClick={closeCart} />
          </div>
          <hr className="my-2" />
          <div className="flex flex-col gap-2">
            <FoodItem name="Pizza" quantity="3" price="100" />
            <FoodItem name="Pizza" quantity="3" price="100" />
            <FoodItem name="Pizza" quantity="3" price="100" />
            <FoodItem name="Pizza" quantity="3" price="100" />
          </div>
        </div>
      )}
      <div className="fixed w-full bg-gray-100 z-40 p-2.5 px-3 bottom-0">
        <CartSm toggle={toggleCart} />
        <CartLg toggle={toggleCart} />
      </div>
    </>
  );
};

export default CartContainer;
