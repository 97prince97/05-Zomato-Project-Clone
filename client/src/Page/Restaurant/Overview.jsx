import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoCaretForwardSharp } from "react-icons/io5";
import { FaRegCopy, FaDirections } from "react-icons/fa";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Component
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/restaurant/MenuSimilarRestaurantCard";
import { NextArrow, PrevArrow } from "../../Components/CarouselArrow";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import Mapview from "../../Components/restaurant/Mapview";

const Overview = () => {
  const { id } = useParams();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-2/3">
          <h2 className="font-medium text-lg md:text-2xl my-4">
            About this place
          </h2>
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium my-5">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center text-zomato-400 gap-1">
                See all menu <IoCaretForwardSharp />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <MenuCollection
              menuTitle="Menu"
              pages="3 pages"
              image="https://b.zmtcdn.com/data/menus/231/19461231/d248e32f8d0b67b7e670de30f42844b8.jpg"
            />
          </div>
          <h4 className="text-xl font-normal my-5">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-400 text-blue-500 px-2 py-1 rounded-full">
              Fast Food
            </span>
            <span className="border border-gray-400 text-blue-500 px-2 py-1 rounded-full">
              Pizza
            </span>
            <span className="border border-gray-400 text-blue-500 px-2 py-1 rounded-full">
              Beverages
            </span>
          </div>
          <div className="my-4">
            <h4 className="text-xl font-medium mb-4">Average Cost</h4>
            <h6>₹500 for two people (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div>
            <h4 className="text-xl font-medium my-4">Similar Restaurants</h4>
            <Slider {...settings}>
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/8/19528758/a91b2c7353ee6859a851c248743b3ad5_featured_v2.jpg"
                title="Chicago Pizza"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/8/19528758/a91b2c7353ee6859a851c248743b3ad5_featured_v2.jpg"
                title="Chicago Pizza"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/8/19528758/a91b2c7353ee6859a851c248743b3ad5_featured_v2.jpg"
                title="Chicago Pizza"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/8/19528758/a91b2c7353ee6859a851c248743b3ad5_featured_v2.jpg"
                title="Chicago Pizza"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/8/19528758/a91b2c7353ee6859a851c248743b3ad5_featured_v2.jpg"
                title="Chicago Pizza"
              />
            </Slider>
          </div>
          <div className="my-6">
            <h4 className="text-xl font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="my-4 md:hidden flex flex-col gap-4 w-full">
            <Mapview
              title="La Pino'z Pizza"
              address="Shop 114/11-g & 114/22-g, Ground Floor, Deep Sikha Building, Sanjay Place, Civil Lines, Agra"
              phno="+916366666094"
              mapLocation={[27.2044175363507, 78.00772061655692]}
            />
          </div>
          <div className="my-4 flex flex-col gap-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:w-1/3 md:flex sticky rounded-xl top-2 bg-white-200 p-3 shadow-md flex flex-col gap-4"
        >
          <Mapview
            title="La Pino'z Pizza"
            address="Shop 114/11-g & 114/22-g, Ground Floor, Deep Sikha Building, Sanjay Place, Civil Lines, Agra"
            phno="+916366666094"
            mapLocation={[27.2044175363507, 78.00772061655692]}
          />
        </aside>
      </div>
    </>
  );
};

export default Overview;
