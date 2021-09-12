import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import { TiStarOutline } from "react-icons/ti";
import TabContainer from "../Components/restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

const RestaurantLayout = (props) => {
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
        <RestaurantInfo
          name="La Pino'z Pizza"
          restaurantRating="3.7"
          deliveryRating="3.8"
          cuisine="Pizza, Fast Food, Beverages"
          address="Civil Lines, Agra"
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <AiOutlineStar /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-5">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;
