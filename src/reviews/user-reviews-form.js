import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createReview,
  updateReviewById,
} from "../services/user-review-services";
import StarComponent from "../star-component/star-component";

const UserReviewsForm = ({ movieId, onSave, reviewItem }) => {
  const user = useSelector((state) => state.user);
  const [review, setReview] = useState(
    reviewItem || {
      movieId,
      reviewedBy: user.id,
      reviewRating: 0,
    }
  );

  const submitReview = async (e) => {
    e.preventDefault();
    if (reviewItem) {
      const retReview = await updateReviewById(reviewItem.id);
      if (typeof onSave === "function") {
        onSave(retReview);
      }
    } else {
      const retReview = await createReview(review);
      if (typeof onSave === "function") {
        onSave(retReview);
      }
    }

    return false;
  };

  const updateRating = (rating) => {
    editHandler("reviewRating", rating);
  };

  const editHandler = (k, v) => {
    setReview((review) => {
      return {
        ...review,
        [k]: v,
      };
    });
  };

  useEffect(() => {
    editHandler("movieId", movieId);
    if (reviewItem) {
      setReview(reviewItem);
    }
  }, [movieId, reviewItem]);

  return (
    <div className="container">
      <StarComponent
        onChange={updateRating}
        rating={reviewItem ? reviewItem.reviewRating : 0}
      />
      <form onSubmit={submitReview}>
        <fieldset>
          <div className="form-group">
            <input
              placeholder="Review headline"
              className="form-control mt-3"
              value={review.reviewTitle}
              onChange={(e) => editHandler("reviewTitle", e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control mt-3"
              rows="5"
              placeholder="Write your review"
              value={review.reviewDetail}
              onChange={(e) => editHandler("reviewDetail", e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UserReviewsForm;
