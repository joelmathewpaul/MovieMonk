import StarComponent from "../star-component/star-component";

const ReviewListItem = ({ reviewListItem }) => {
  const formatDate = (sentOn) => {
    const postedOn = new Date(sentOn);
    const formattedDate = `${postedOn.getFullYear()}/${postedOn.getMonth()}/${postedOn.getDate()}`;
    return formattedDate;
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
          <p className="m-0 text-primary fw-bold">
            {reviewListItem.reviewedBy.name}
          </p>
          <small className="smaller-font text-muted">
            {formatDate(reviewListItem.reviewTime)}
          </small>
        </div>
      </div>
      <div className="m-0 ms-2">
        <div className="mb-2 mt-0 d-flex flex-row">
          <span>Overall</span>
          <StarComponent rating={reviewListItem.reviewRating} disabled={true} />
        </div>

        {reviewListItem.reviewType === "CRITIC" && (
          <div>
            <div className="mb-1 mt-0 d-flex flex-row">
              <span>Acting</span>
              <StarComponent
                rating={reviewListItem.actingRating}
                disabled={true}
              />
            </div>
            <div className="mb-1 mt-0 d-flex flex-row">
              <span>Direction</span>
              <StarComponent
                rating={reviewListItem.directionRating}
                disabled={true}
              />
            </div>
            <div className="mb-1 mt-0 d-flex flex-row">
              <span>Cinematography</span>
              <StarComponent
                rating={reviewListItem.cinematographyRating}
                disabled={true}
              />
            </div>
            <div className="mb-1 mt-0 d-flex flex-row">
              <span>Soundtrack</span>
              <StarComponent
                rating={reviewListItem.soundtrackRating}
                disabled={true}
              />
            </div>
          </div>
        )}

        <p className="mb-2">
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
