import React from "react";

// Component
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";

const Nutrition = () => {
  return (
    <>
      <NutritionHeroCarousel />
      <div className="my-6">
        <NutritionCarousel />
      </div>
    </>
  );
};

export default Nutrition;
