import ReviewListItem from "./reviews-list-item";

const ReviewList = ({ reviewList }) => {
  return (
    <>
      <ul className="list-group">
        {reviewList.map((review) => (
          <ReviewListItem ReviewListItem={review} />
        ))}
      </ul>
    </>
  );
};

export default ReviewList;
