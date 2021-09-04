import React from "react";

// Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";

const RestaurantLayout = () => {
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-52">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/1/19461231/e0e6212c11a6b573e7b3ad4edfef97d5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/1/19461231/e0e6212c11a6b573e7b3ad4edfef97d5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/1/19461231/e0e6212c11a6b573e7b3ad4edfef97d5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/1/19461231/e0e6212c11a6b573e7b3ad4edfef97d5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/1/19461231/e0e6212c11a6b573e7b3ad4edfef97d5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ]}
        />
      </div>
    </>
  );
};

export default RestaurantLayout;
