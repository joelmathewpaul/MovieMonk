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
          src={reviewListItem.profilePhoto}
          width={48}
          height={48}
          className="rounded-circle m-2"
          alt="User DP"
        />
        <div className="flex-fill m-2">
          <p className="m-0 text-primary fw-bold">{reviewListItem.reviewedBy.name}</p>
          <small className="smaller-font text-muted">{formatDate(reviewListItem.reviewTime)}</small>
        </div>
      </div>
      <div className="m-0 ms-2">
        <div className="mb-2 mt-0">
          <StarComponent rating={reviewListItem.reviewRating} disabled={true} />
        </div>
        <p className="mb-2">
          <i class="fa-solid fa-quote-left"></i>
          <span className="ps-2 pe-2">{reviewListItem.reviewTitle}</span>
          <i class="fa-solid fa-quote-right"></i>
        </p>
        <small>{reviewListItem.reviewDetail}</small>
      </div>
    </li>
  );
};

export default ReviewListItem;
// <div className="wd-bookmark-details p-1">
//   <img
//       src={"https://tinyurl.com/4xpka8wb"}
//       width={48} height={48}
//       className="wd-profile-pic  d-inline-block me-2
//             rounded-circle float-start
//       "
//       alt=""
//   />
//   <div className="d-flex">
//     <h4>
//       {" "}
//       {"Joel"}{" "}
//       <span className="text-light fs-6">
//                 {"rating"}
//         <span className="text-muted"> </span>
//         {"Date"}
//               </span>
//     </h4>
//   </div>
//   <p className="wd-details-bookmark text-wrap w-100 d-inline-block
//           ms-5 mb-2">
//     {"Details"}</p>
// </div>
