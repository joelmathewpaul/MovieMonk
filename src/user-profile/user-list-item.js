import { deletUserById } from "../services/user-service";
import { formatDate } from "../utils";

const UserListItem = ({ userListItem, onDelete }) => {
  const deleteUser = () => {
    const id = userListItem.id;
    deletUserById(id).then((resposnse) => {
      if (onDelete && onDelete === "function") {
        onDelete();
      }
    });
  };

  return (
    <li className="list-group-item ">
      <div className="d-flex flex-row p-1">
        <img
          src={userListItem ? userListItem.profilePhoto : ""}
          width={48}
          height={48}
          className="rounded-circle m-2"
          alt="User DP"
        />
        <div className="flex-fill flex-column pt-2">
          <p className="m-0">{userListItem.name}</p>
          <p className="m-0 text-muted">User Type : {userListItem.accountType}</p>
          <p className="m-0 text-muted">Joined: {formatDate(userListItem.joined)}</p>
        </div>
        <i
          className="fa fa-trash pointer text-danger pe-2 pt-1"
          title="Delete User"
          onClick={deleteUser}
        ></i>
      </div>
    </li>
  );
};

export default UserListItem;
