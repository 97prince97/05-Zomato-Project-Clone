import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  RiShoppingBag3Line,
  RiFootprintLine,
  RiHeartAddLine,
} from "react-icons/ri";
import { GiWineGlass } from "react-icons/gi";
import classnames from "classnames";

const MobileTabs = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <RiFootprintLine />,
      name: "Dining Out",
    },
    {
      id: "night",
      icon: <GiWineGlass />,
      name: "Night Life",
    },
    {
      id: "nutri",
      icon: <RiHeartAddLine />,
      name: "Nutrition",
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
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      name: "Dining Out",
      activeColor: "blue",
    },
    {
      id: "night",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      name: "Night Life",
      activeColor: "purple",
    },
    {
      id: "nutri",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      name: "Nutrition",
      activeColor: "yellow",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      {allTypes.map((items) => (
        <Link to={`/${items.id}`}>
          <div
            className={classnames(
              "flex items-center gap-2.5 pb-2 transition-all duration-500 ease-in-out my-8",
              {
                "border-b-2 border-zomato-400": type === items.id,
              }
            )}
          >
            <div
              className={classnames("w-14 h-14 bg-gray-100 p-3 rounded-full", {
                [`bg-${items.activeColor}-100`]: type === items.id,
              })}
            >
              <img
                src={type === items.id ? items.imageActive : items.imageDefault}
                alt="delivery"
                className="w-full h-full"
              />
            </div>
            <h3
              className={`text-xl ${
                type === items.id ? "text-zomato-300" : "text-gray-500"
              } font-semibold`}
            >
              {items.name}
            </h3>
          </div>
        </Link>
      ))}
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
