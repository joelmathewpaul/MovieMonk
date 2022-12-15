import ReviewListItem from "./reviews-list-item";

const ReviewList = ({ reviewList = [], onUpdate, onDelete }) => {
  return (
    <ul className="list-group">
      {reviewList.map((review) => (
        <ReviewListItem
          key={review.id}
          reviewListItem={review}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
