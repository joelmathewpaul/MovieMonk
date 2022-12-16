import { useEffect, useState } from "react";
import { findAllReviews } from "../services/user-review-services";
import ReviewList from "../reviews/reviews-list";
import Review from "../models/review";

const UserReviewModerationList = () => {
  const [allReviews, setAllReviews] = useState([]);
  const onDelete = () => {
    findAllReviews().then((reviews) => {
      const list = Review.getListFromJsonArray(reviews);
      setAllReviews(list);
    });
  };

  useEffect(() => {
    findAllReviews().then((reviews) => {
      const list = Review.getListFromJsonArray(reviews);
      setAllReviews(list);
    });
  }, []);

  return (
    <div>
      <ReviewList reviewList={allReviews} onDelete={onDelete} isAdmin={true} />
    </div>
  );
};

export default UserReviewModerationList;
