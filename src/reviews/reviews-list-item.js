import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReviewByID } from "../services/user-review-services";
import StarComponent from "../star-component/star-component";
import { formatDate } from "../utils";

const ReviewListItem = ({ reviewListItem, onUpdate, onDelete }) => {
  const user = useSelector((state) => state.user);

  const deleteReview = async () => {
    const reviewId = reviewListItem.id;
    await deleteReviewByID(reviewId);
    if (onDelete && typeof onDelete === "function") {
      onDelete(reviewListItem);
    }
  };

  const updateReview = async () => {
    if (onUpdate && typeof onUpdate === "function") {
      onUpdate(reviewListItem);
    }
  };

  return (
    <li className="list-group-item">
      <div className="d-flex flex-row mb-0">
        <img
          src={reviewListItem?.reviewedBy.profilePhoto}
          width={48}
          height={48}
          className="rounded-circle m-2"
          alt="User DP"
        />
        <div className="flex-fill m-2">
          {reviewListItem.reviewedBy._id === user?.id && (
            <Link
              to={`/profile`}
              className="m-0 d-block text-primary fw-bold text-underline-hover"
            >
              {reviewListItem.reviewedBy.name}
            </Link>
          )}
          {reviewListItem.reviewedBy._id !== user?.id && (
            <Link
              to={`/view-profile/${reviewListItem.reviewedBy._id}`}
              className="m-0 d-block text-primary fw-bold text-underline-hover"
            >
              {reviewListItem.reviewedBy.name}
            </Link>
          )}
          <small className="smaller-font text-muted">
            {formatDate(reviewListItem.reviewTime)}
          </small>
        </div>
        {!!user && user.id === reviewListItem.reviewedBy._id && (
          <div className="d-flex flex-row">
            <div>
              <i
                className="fa fa-edit pointer p-2 pt-3"
                onClick={updateReview}
                title="Edit Review"
              />
            </div>
            <div>
              <i
                className="fa fa-times pointer pt-3 ps-2"
                title="Delete Review"
                onClick={deleteReview}
              />
            </div>
          </div>
        )}
      </div>
      <div className="ms-2">
        {reviewListItem.reviewType === "NORMAL" && (
          <div className="mb-1 d-flex flex-row">
            <span>Overall</span>
            <StarComponent
              rating={reviewListItem.reviewRating}
              disabled={true}
            />
          </div>
        )}
        {reviewListItem.reviewType === "CRITIC" && (
          <div>
            <div className="mb-1 d-flex flex-row">
              <span className="mx-width150">Overall</span>
              <StarComponent
                rating={reviewListItem.reviewRating}
                disabled={true}
              />
            </div>
            <div className="mb-1 d-flex flex-row">
              <span className="mx-width150">Acting</span>
              <StarComponent
                rating={reviewListItem.actingRating}
                disabled={true}
              />
            </div>
            <div className="mb-1 d-flex flex-row">
              <span className="mx-width150">Direction</span>
              <StarComponent
                rating={reviewListItem.directionRating}
                disabled={true}
              />
            </div>
            <div className="mb-1 d-flex flex-row">
              <span className="mx-width150">Cinematography</span>
              <StarComponent
                rating={reviewListItem.cinematographyRating}
                disabled={true}
              />
            </div>
            <div className="mb-1 d-flex flex-row">
              <span className="mx-width150">Soundtrack</span>
              <StarComponent
                rating={reviewListItem.soundtrackRating}
                disabled={true}
              />
            </div>
          </div>
        )}
        <p className="pt-1 mb-2">
          <i className="fa-solid fa-quote-left"></i>
          <span className="ps-2 pe-2">{reviewListItem.reviewTitle}</span>
          <i className="fa-solid fa-quote-right"></i>
        </p>
        <small>{reviewListItem.reviewDetail}</small>
      </div>
    </li>
  );
};

export default ReviewListItem;
