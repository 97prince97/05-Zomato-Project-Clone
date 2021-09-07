import React from "react";

const MenuCollection = (props) => {
  return (
    <>
      <div className="w-32 h-32 flex flex-col md:w-52 md:h-52">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt="menu"
            className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"
          />
        </div>
        <span className="text-base font-medium">{props.menuTitle}</span>
        <p className="text-xs text-gray-400">{props.pages}</p>
      </div>
    </>
  );
};

export default MenuCollection;
