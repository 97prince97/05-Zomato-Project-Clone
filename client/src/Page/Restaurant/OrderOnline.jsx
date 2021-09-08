import React from "react";
import { IoCompassOutline, IoLogoChrome } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";

// Components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import FoodItem from "../../Components/restaurant/Order-Online/FoodItem";
const OrderOnline = () => {
  return (
    <>
      <div className="w-full flex">
        <aside className="hidden md:flex w-1/4 border-r border-gray-300 h-screen overflow-y-scroll flex-col gap-3">
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-semibold">Order Online</h2>
          <h4 className="flex items-center gap-2 text-gray-500 font-light">
            <IoCompassOutline /> Live track your order | <HiOutlineClock /> 37
            min
          </h4>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/e0a/c02eadd59fb1ed566e6837ff022dae0a.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
              title="
              Paneer Tikka Butter Masala Pizza"
              price="₹210"
              rating="3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae eos minima ad quo in accusamus porro. Debitis alias dolore culpa exercitationem. Distinctio, vero quam. Natus suscipit iste eaque obcaecati."
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
