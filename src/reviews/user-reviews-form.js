import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createReview } from "../services/user-review-services";
import StarComponent from "../star-component/star-component";

const UserReviewsForm = ({ movieId, onSave }) => {
  const user = useSelector((state) => state.user);
  const [review, setReview] = useState({ movieId, reviewedBy: user.id });

  const submitReview = async (e) => {
    e.preventDefault();
    const retReview = await createReview(review);
    if (onSave && typeof onSave === 'function') {
      onSave(retReview);
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
  }, [movieId]);

  return (
    <div className="container">
      <StarComponent onChange={updateRating} rating={0} />
      <form onSubmit={submitReview}>
        <fieldset>
          <div className="form-group">
            <input
              placeholder="Add Headline"
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
