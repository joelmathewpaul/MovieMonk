import { useEffect, useState } from "react";

const StarComponent = ({ disabled, rating, onChange }) => {
  const [currentRating, setRating] = useState(rating);
  const ratingChanged = (newRating) => {
    setRating(newRating);
    if (typeof onChange === "function") {
      onChange(newRating);
    }
  };
  useEffect(() => {
    setRating(rating);
  }, [rating]);
  return (
    <div className="d-flex align-items-center">
      <div className="row">
        <div
          className="rating-wrapper align-self-center border-5 d-inline-flex"
          dir="rtl"
        >
          <label
            className="st-label  d-inline-flex ps-2"
            role="button"
            data-checked={currentRating > 4}
          >
            <input
              type="radio"
              name="star-rating"
              className="h-100 w-100 d-none"
              disabled={disabled}
              onChange={() => ratingChanged(5)}
              checked={currentRating > 4}
            />
            {(currentRating > 4.5 || currentRating <= 4) && (
              <i className="fas fa-star d-inline-block"></i>
            )}
            {currentRating <= 4.5 && currentRating > 4 && (
              <i className="fas fa-star-half d-inline-block"></i>
            )}{" "}
          </label>

          <label
            className="st-label star  d-inline-flex ps-2"
            role="button"
            data-checked={currentRating > 3 && currentRating <= 4}
          >
            <input
              type="radio"
              checked={currentRating > 3 && currentRating <= 4}
              name="star-rating"
              disabled={disabled}
              onChange={() => ratingChanged(4)}
              className="h-100 w-100 d-none"
            />
            {(currentRating > 3.5 || currentRating <= 3) && (
              <i className="fas fa-star d-inline-block"></i>
            )}
            {currentRating <= 3.5 && currentRating > 3 && (
              <i className="fas fa-star-half d-inline-block"></i>
            )}
          </label>

          <label
            className="st-label star  d-inline-flex ps-2"
            role="button"
            data-checked={currentRating > 2 && currentRating <= 3}
          >
            <input
              type="radio"
              checked={currentRating > 2 && currentRating <= 3}
              disabled={disabled}
              onChange={() => ratingChanged(3)}
              name="star-rating"
              className="h-100 w-100 d-none"
            />
            {(currentRating > 2.5 || currentRating <= 2) && (
              <i className="fas fa-star d-inline-block"></i>
            )}
            {currentRating <= 2.5 && currentRating > 2 && (
              <i className="fas fa-star-half d-inline-block"></i>
            )}
          </label>

          <label
            className="st-label star  d-inline-flex ps-2"
            role="button"
            data-checked={currentRating > 1 && currentRating <= 2}
          >
            <input
              type="radio"
              checked={currentRating > 1 && currentRating <= 2}
              disabled={disabled}
              onChange={() => ratingChanged(2)}
              name="star-rating"
              className="h-100 w-100 d-none"
            />
            {(currentRating > 1.5 || currentRating <= 1) && (
              <i className="fas fa-star d-inline-block"></i>
            )}
            {currentRating <= 1.5 && currentRating > 1 && (
              <i className="fas fa-star-half d-inline-block"></i>
            )}{" "}
          </label>

          <label
            className="st-label star d-inline-flex ps-2"
            role="button"
            data-checked={currentRating > 0 && currentRating <= 1}
          >
            <input
              type="radio"
              checked={currentRating > 0 && currentRating <= 1}
              disabled={disabled}
              onChange={() => ratingChanged(1)}
              name="star-rating"
              className="h-100 w-100 d-none"
            />
            {(currentRating > 0.5 || currentRating == 0) && (
              <i className="fas fa-star d-inline-block"></i>
            )}
            {currentRating <= 0.5 && currentRating > 0 && (
              <i className="fas fa-star-half d-inline-block"></i>
            )}{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default StarComponent;
