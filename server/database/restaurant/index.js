import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  mapLocation: { type: String, required: true }, // Latitude and longitude(to detect map coordinates)
  cuisine: [String],
  restaurantTimings: String,
  constactNumber: Number,
  website: Number,
  popularDishes: [String],
  averageCost: Number, // if two people visit the restaurant what will be the avg cost
  amenties: [Strings],
  menuImages: {
    type: mongoose.Types.ObjectId,
    ref: "Images",
  },
  menu: {
    type: mongoose.Types.ObjectId,
    ref: "Menus",
  },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],
  photos: { type: mongoose.Types.ObjectId, ref: "Images" },
});

export const Restaurants = mongoose.model("Restaurants", RestaurantSchema);