import React from "react";
import {
  RiShoppingBag3Line,
  RiFootprintLine,
  RiHeartAddLine,
} from "react-icons/ri";
import { GiWineGlass } from "react-icons/gi";

const MobileTabs = () => {
  return (
    <>
      <div className="bg-white shadow-lg p-3 fixed bottom-0 z-10 flex items-center justify-between md:justify-around w-full">
        <div className="flex flex-col items-center text-2xl">
          <RiShoppingBag3Line />
          <h5 className="text-sm">Delivery</h5>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <RiFootprintLine />
          <h5 className="text-sm">Dining Out</h5>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <GiWineGlass />
          <h5 className="text-sm">Night Life</h5>
        </div>
        <div className="flex flex-col items-center text-2xl">
          <RiHeartAddLine />
          <h5 className="text-sm">Nurtition</h5>
        </div>
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
