import React, { useState } from "react";

// Components
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/restaurant/Reviews/AddReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState(["", "", ""]);

  const handleRating = (value) => console.log(value);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row relative">
        <div className="w-full md:w-2/3 flex flex-col gap-3">
          <div className="md:hidden">
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:w-1/3 md:flex items-start sticky rounded-xl top-2 bg-white-200 p-3 shadow-md flex flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
};

export default Reviews;
