import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  createReview,
  updateReviewById,
} from "../services/user-review-services";
import StarComponent from "../star-component/star-component";

const CriticUserReviewForm = ({ movieId, onSave, reviewItem }) => {
  const user = useSelector((state) => state.user);
  const [review, setReview] = useState(
    reviewItem || {
      movieId,
      reviewedBy: user.id,
      reviewType: "CRITIC",
      actingRating: 0,
      directionRating: 0,
      soundtrackRating: 0,
      cinematographyRating: 0,
    }
  );

  const submitReview = async (e) => {
    e.preventDefault();
    const overallRating =
      (review.actingRating +
        review.directionRating +
        review.soundtrackRating +
        review.cinematographyRating) /
      4;
    review.reviewRating = overallRating;
    if (reviewItem) {
      const retReview = await updateReviewById(reviewItem.id, review);
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

  const updateActingRating = (rating) => {
    editHandler("actingRating", rating);
  };

  const updateDirectionRating = (rating) => {
    editHandler("directionRating", rating);
  };

  const updateSoundtrackRating = (rating) => {
    editHandler("soundtrackRating", rating);
  };

  const updateCinematographyRating = (rating) => {
    editHandler("cinematographyRating", rating);
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
      <form onSubmit={submitReview}>
        <div className="mb-1 d-flex flex-row">
          <span className="mx-width150">Acting</span>
          <StarComponent
            onChange={updateActingRating}
            rating={reviewItem?.actingRating || 0}
          />
        </div>
        <div className="mb-1 d-flex flex-row">
          <span className="mx-width150">Direction</span>
          <StarComponent
            onChange={updateDirectionRating}
            rating={reviewItem?.directionRating || 0}
          />
        </div>
        <div className="mb-1 d-flex flex-row">
          <span className="mx-width150">Cinematography</span>
          <StarComponent
            rating={reviewItem?.cinematographyRating || 0}
            onChange={updateCinematographyRating}
          />
        </div>
        <div className="mb-1 d-flex flex-row">
          <span className="mx-width150">Soundtrack</span>
          <StarComponent
            rating={reviewItem?.soundtrackRating || 0}
            onChange={updateSoundtrackRating}
          />
        </div>
        <fieldset>
          <div className="form-group">
            <input
              id="reviewHeadLine"
              placeholder="Review headline"
              className="form-control mt-4 mb-2"
              value={review.reviewTitle}
              onChange={(e) => editHandler("reviewTitle", e.target.value)}
            />
          </div>
          <div className="form-group">
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

export default CriticUserReviewForm;
