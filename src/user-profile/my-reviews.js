import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Review from "../models/review";
import CriticUserReviewForm from "../reviews/critic-review-form";
import ReviewList from "../reviews/reviews-list";
import UserReviewsForm from "../reviews/user-reviews-form";
import { findReviewByUserId } from "../services/user-review-services";

/**
 * Responsible for the reviews made by a particular user.
 */
const MyReviews = ({ user }) => {
  const [reviews, setReviewList] = useState([]);
  const [show, setShow] = useState(false);
  const [editedReview, setEditReview] = useState();

  /**
   * Downloads all the reviews the passed in user has made in the past.
   */
  const downloadReviews = () => {
    findReviewByUserId(user.id).then((reviewList) => {
      console.log(reviewList);
      setReviewList(Review.getListFromJsonArray(reviewList));
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSave = (dbReview) => {
    downloadReviews();
    handleClose();
  };

  const onUpdate = (reviewItem) => {
    setEditReview(reviewItem);
    handleShow();
  };

  const onDelete = () => {
    downloadReviews();
  };

  useEffect(() => {
    downloadReviews();
  }, [user]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!!user && user.accountType === "NORMAL" && editedReview && (
            <UserReviewsForm
              movieId={editedReview.movieId}
              onSave={onSave}
              reviewItem={editedReview}
            />
          )}
          {!!user && user.accountType === "CRITIC" && editedReview && (
            <CriticUserReviewForm
              movieId={editedReview.movieId}
              onSave={onSave}
              reviewItem={editedReview}
            />
          )}
          {!user && (
            <p className="text-muted">
              You need to be logged in to do this operation
            </p>
          )}
        </Modal.Body>
      </Modal>
      <ReviewList
        reviewList={reviews}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
};

export default MyReviews;
