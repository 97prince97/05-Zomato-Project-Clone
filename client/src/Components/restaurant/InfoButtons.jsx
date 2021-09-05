import React from "react";
import classnames from "classnames";

const InfoButtons = (props) => {
  return (
    <>
      <button
        className={classnames(
          "flex gap-1 items-center border border-zomato-400 px-3 py-1.5 rounded-lg",
          {
            "text-white bg-zomato-400": props.isActive,
          }
        )}
      >
        {props.children}
      </button>
    </>
  );
};

export default InfoButtons;
