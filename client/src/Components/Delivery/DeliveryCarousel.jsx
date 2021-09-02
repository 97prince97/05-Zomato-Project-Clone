import React from "react";
import Slider from "react-slick";

// Components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarouselArrow";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
      title: "Paneer",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/135e8b20c21e20fc6430f780e0c899231630427922.png",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/83befdecd77e57a8c53d22b67d0b866d1612437905.png",
      title: "Dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/dfa447d5de421602c1af7d58349cae1f1612436391.png",
      title: "Thali",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d72841d1b5b27b763c25a16bb9fe34161602870829.png",
      title: "Dal",
    },
  ];

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <h1 className="text-xl mb-4 font-semibold lg:text-3xl">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousel;
