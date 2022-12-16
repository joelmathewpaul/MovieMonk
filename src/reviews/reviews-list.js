import ReviewListItem from "./reviews-list-item";

const ReviewList = ({ reviewList = [], onUpdate, onDelete, isAdmin }) => {
  return (
    <ul className="list-group">
      {reviewList.map((review) => (
        <ReviewListItem
          key={review.id}
          reviewListItem={review}
          onUpdate={onUpdate}
          onDelete={onDelete}
          isAdmin={isAdmin}
        />
      ))}
      {reviewList.length === 0 && (
        <small className="text-muted">
          No reviews exists yet, once added it will appear here.
        </small>
      )}
    </ul>
  );
};

export default ReviewList;
