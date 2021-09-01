import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  RiShoppingBag3Line,
  RiFootprintLine,
  RiHeartAddLine,
} from "react-icons/ri";
import { GiWineGlass } from "react-icons/gi";

const MobileTabs = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
      isActive: false,
    },
    {
      id: "dining",
      icon: <RiFootprintLine />,
      name: "Dining Out",
      isActive: false,
    },
    {
      id: "night",
      icon: <GiWineGlass />,
      name: "Night Life",
      isActive: false,
    },
    {
      id: "nutri",
      icon: <RiHeartAddLine />,
      name: "Nutrition",
      isActive: false,
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="bg-white shadow-lg p-3 fixed bottom-0 z-10 flex items-center justify-between md:justify-around w-full border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? "flex flex-col relative items-center text-2xl text-zomato-400"
                  : "flex flex-col items-center text-2xl"
              }
            >
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-32 h-2 border-t-2 border-zomato-400"
                }
              />
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const LargeTabs = () => {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <div className="w-14 h-14 bg-gray-100 p-3 rounded-full">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
            alt="delivery"
            className="w-full h-full"
          />
        </div>
        <h3 className="text-xl text-gray-500 font-semibold">Delivery</h3>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="w-14 h-14 bg-gray-100 p-3 rounded-full">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
            alt="delivery"
            className="w-full h-full"
          />
        </div>
        <h3 className="text-xl text-gray-500 font-semibold">Dining Out</h3>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="w-14 h-14 bg-gray-100 p-3 rounded-full">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
            alt="delivery"
            className="w-full h-full"
          />
        </div>
        <h3 className="text-xl text-gray-500 font-semibold">Night Life</h3>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="w-14 h-14 bg-gray-100 p-3 rounded-full">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
            alt="delivery"
            className="w-full h-full"
          />
        </div>
        <h3 className="text-xl text-gray-500 font-semibold">Nutrition</h3>
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div className="lg:hidden">
        <MobileTabs />
      </div>
      <div className="hidden lg:flex container px-52 mx-auto gap-14">
        <LargeTabs />
      </div>
    </>
  );
};

export default FoodTab;
