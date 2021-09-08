import React from "react";

// Components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full">
        <aside className="hidden md:flex w-1/4 border-r border-gray-300 h-screen overflow-y-scroll flex-col gap-3">
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full md:w-3/4"></div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
