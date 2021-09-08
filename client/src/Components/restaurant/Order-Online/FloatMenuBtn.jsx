import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// Components
import MenuListContainer from "./MenuListContainer";

const FloatMenuBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <>
      <div className="fixed bottom-2 w-8/12 flex flex-col gap-3 items-end right-2 z-30 md:hidden">
        {isClicked && (
          <div className="p-3 bg-white h-48 overflow-y-scroll">
            <MenuListContainer />
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-1 text-white bg-black px-3 py-2 rounded-full "
        >
          {isClicked ? <IoClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
};

export default FloatMenuBtn;
