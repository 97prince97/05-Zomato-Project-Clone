import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const MenuCollection = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={props.image}
          currentIndex={CurrentImg}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeViewer}
        />
      )}
      <div
        className="w-32 h-32 flex flex-col md:w-52 md:h-52"
        onClick={openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image[0]}
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
