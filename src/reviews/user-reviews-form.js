import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createReview } from "../services/user-review-services";
import StarComponent from "../star-component/star-component";

const UserReviewsForm = ({ movieId }) => {
  const user = useSelector((state) => state.user);
  console.log(movieId);
  const [review, setReview] = useState({ movieId, reviewedBy: user.id });

  const submitReview = async (e) => {
    e.preventDefault();
    const retReview = await createReview(review);
    console.log(retReview);
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
      <StarComponent onChange={updateRating} rating={4} />
      <form onSubmit={submitReview}>
        <fieldset>
          <div className="form-group">
            <label className="form-label mt-4 text-white">
              Review Head Line
            </label>
            <input
              id="reviewHeadLine"
              placeholder="Headline"
              className="form-control"
              value={review.reviewTitle}
              onChange={(e) => editHandler("reviewTitle", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="reviewtextarea"
              className="form-label mt-4 text-white"
            >
              Detailed Review
            </label>
            <textarea
              className="form-control"
              id="reviewtextarea"
              rows="5"
              placeholder="Write your review"
              value={review.reviewDetail}
              onChange={(e) => editHandler("reviewDetail", e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button
              type="reset"
              className="btn text-dark me-4 btn-outline-danger"
            >
              Discard
            </button>
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
