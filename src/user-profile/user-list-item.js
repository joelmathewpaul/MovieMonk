import { formatDate } from "../utils";

const UserListItem = ({ userListItem }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-row">
        <img
          src={userListItem ? userListItem.profilePhoto : ""}
          width={48}
          height={48}
          className="rounded-circle m-2"
          alt="User DP"
        />
        <div className="flex-fill flex-column pt-2">
          <p className="m-0">{userListItem.name}</p>
          <p className="m-0">User Type : {userListItem.accountType}</p>
          <p className="m-0">{formatDate(userListItem.joined)}</p>
        </div>
      </div>
    </li>
  );
};

export default UserListItem;
