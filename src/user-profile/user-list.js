import { useEffect, useState } from "react";
import UserListItem from "./user-list-item";
import { findAllUsers } from "../services/user-service";

const UserList = ({ userList = [] }) => {
  const [listOfUsers, setUserList] = useState(userList);

  const onDelete = () => {
    findAllUsers().then((userList) => {
      setUserList(userList);
    });
  };

  useEffect(() => {
    findAllUsers().then((userList) => {
      setUserList(userList);
    });
  }, [userList, listOfUsers]);
  return (
    <ul className="list-group">
      {userList.map((user) => (
        <UserListItem key={user.id} onDelete={onDelete} userListItem={user} />
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
