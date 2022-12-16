import UserListItem from "./user-list-item";

const UserList = ({ userList = [] }) => {
  return (
    <ul className="list-group">
      {userList.map((user) => (
        <UserListItem key={user.id} userListItem={user} />
      ))}
      {userList.length === 0 && (
        <small className="text-muted">
          No User exists yet, once added it will appear here.
        </small>
      )}
    </ul>
  );
};

export default UserList;
