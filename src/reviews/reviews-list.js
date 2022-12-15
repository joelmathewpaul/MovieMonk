import ReviewListItem from "./reviews-list-item";

const ReviewList = ({ reviewList = [] }) => {
  return (
    <ul className="list-group">
      {reviewList.map((review) => (
        <ReviewListItem key={review.id} reviewListItem={review} />
      ))}
    </ul>
  );
};

export default ReviewList;
