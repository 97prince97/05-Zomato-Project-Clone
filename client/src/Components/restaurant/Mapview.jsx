import React from "react";
import { FaRegCopy, FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Mapview = (props) => {
  return (
    <>
      <h4 className="text-xl font-medium">Call</h4>
      <h5 className="text-zomato-400 text-medium">{props.phno}</h5>
      <div>
        <h4 className="text-xl font-medium">Direction</h4>
        <div className="w-full h-48">
          <MapContainer
            center={props.mapLocation}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.mapLocation}>
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <p>{props.address}</p>
      <div className=" flex items-center gap-3">
        <button className="flex items-center gap-2 px-2 py-1.5 text-gray-700 border border-gray-400 rounded-lg">
          <span className="text-gray-500 text-lg">
            <FaRegCopy />
          </span>
          Copy
        </button>
        <button className="flex items-center gap-2 px-2 py-1.5 text-gray-700 border border-gray-400 rounded-xl">
          <span className="text-zomato-400 text-xl">
            <FaDirections />
          </span>
          Directions
        </button>
      </div>
    </>
  );
};

export default Mapview;
