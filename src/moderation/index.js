import UserModerationList from "./userModeraionList";
import UserReviewModerationList from "./userReviewModerationList";

const Moderation = () => {
  return (
    <div className="d-flex">
      <UserModerationList />
      <UserReviewModerationList />
    </div>
  );
};

export default Moderation;
