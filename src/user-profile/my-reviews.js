import { useEffect, useState } from "react";
import Review from "../models/review";
import ReviewList from "../reviews/reviews-list";
import { findReviewByUserId } from "../services/user-review-services";

const MyReviews = ({ user }) => {
  const [reviews, setReviewList] = useState([]);

  useEffect(() => {
    findReviewByUserId(user._id).then((reviewList) => {
      console.log(reviewList);
      setReviewList(Review.getListFromJsonArray(reviewList));
    });
  }, [user]);
  return (
    <div>
      <ReviewList reviewList={reviews} />
    </div>
  );
};

export default MyReviews;
