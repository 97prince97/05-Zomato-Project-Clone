import React from "react";
import classnames from "classnames";
import { useLocation, Link, useParams } from "react-router-dom";

const Tab = (props) => {
  const { id } = useParams();
  return (
    <Link to={`/restaurant/${id}/${props.route}`}>
      <div
        className={classnames(
          "text-gray-500 relative font-normal px-l-2 py-4 border-2 border-blue-500",
          {
            "text-zomato-400 font-normal": props.isActive,
          }
        )}
      >
        <div className="absolute w-full border-b-2 bottom-0 border-zomato-400" />
        <h3 className="text-lg md:text-xl">{props.title}</h3>
      </div>
    </Link>
  );
};

const TabContainer = (props) => {
  const location = useLocation();

  const currentPath = location.pathname;

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: currentPath.includes("overview"),
    },
    {
      title: "Oder Online",
      route: "order-online",
      isActive: currentPath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: currentPath.includes("reviews"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: currentPath.includes("menu"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: currentPath.includes("photos"),
    },
  ];
  return (
    <>
      <div className="flex items-center gap-3 md:gap-20 overflow-x-auto overflow-y-hidden border-2">
        {tabs.map((tab) => (
          <Tab {...tab} key={`123${tab.route}`} />
        ))}
      </div>
    </>
  );
};

export default TabContainer;
