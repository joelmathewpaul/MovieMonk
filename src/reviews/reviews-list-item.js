import Review from "../models/review";
import StarComponent from "../star-component/star-component";
import "./index.css";
const ReviewListItem = ({ ReviewListItem }) => {
  return (
    <li className="rounded mb-4 list-group-item border-4 border-danger m-2">
      <div className="singleReviewItem d-flex flex-row mb-0">
        <img
          src={ReviewListItem.profilePhoto}
          width={48}
          height={48}
          className="rounded-circle m-2"
          alt=""
        />
        <div className="flex-fill m-2">
          <p className="mb-0">{ReviewListItem.reviewedBy.name}</p>
          <p>{ReviewListItem.reviewTime}</p>
        </div>
      </div>
      <div className="reviewTitleAndDetaild m-0">
        <p className="mb-1 mt-0">
          <StarComponent rating={ReviewListItem.reviewRating} />
        </p>
        <p className="mb-1 ms-2">{ReviewListItem.reviewTitle}</p>
        <p className="ms-2">{ReviewListItem.reviewDetail}</p>
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
