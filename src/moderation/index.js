import Header from "../header";
import UserModerationList from "./userModeraionList";
import UserReviewModerationList from "./userReviewModerationList";

/**
 * Responsible for providing moderation functionality to admins.
 */
const Moderation = () => {
  return (
    <div>
      <Header />
      <div className="container bg-white rounded-3 overflow-hidden">
        <div className="row">
          <div className="col-md-6 pt-3 pb-3">
            <h5>All Users</h5>
            <UserModerationList />
          </div>
          <div className="col-md-6 pt-3 pb-3">
            <h5>All Reviews</h5>
            <UserReviewModerationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moderation;
