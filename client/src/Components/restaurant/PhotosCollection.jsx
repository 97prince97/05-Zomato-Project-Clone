import React, { useState } from "react";

const PhotoCollection = (props) => {
  return (
    <>
      <div
        className="w-32 h-32 flex flex-col md:w-52 md:h-52"
        onClick={props.openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt="menu"
            className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
};

export default PhotoCollection;
