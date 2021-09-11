import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// Components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/1/19461231/47bb8ad6128c74c755e0eedbc86e3f5f.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/19461231/9f95f4ba927062677e83ad8f802b686d.jpeg",
    "https://b.zmtcdn.com/data/pictures/chains/1/19461231/7f2c2fccceba3f7fb9eaf5163235510d.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/19461231/ed97a34e4c0fb33ff3fff0b97aa049b0.jpeg",
  ]);
  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
};

export default Photos;
