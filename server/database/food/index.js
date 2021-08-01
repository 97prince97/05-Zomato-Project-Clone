import mongoose from "mongoose";

const FoodSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isVeg: { type: Boolean, required: ture },
    isContainsEgg: { type: Boolean, required: ture },
    category: { type: String, required: ture },
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
    price: { type: Number, default: 150, required: true },
    addOns: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
      },
    ],
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurants",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FoodModel = mongoose.model("Foods", FoodSchema);
