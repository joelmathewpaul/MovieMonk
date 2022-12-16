import { useEffect, useState } from "react";
import UserListItem from "./user-list-item";
import { findAllUsers } from "../services/user-service";
import User from "../models/user";

const UserModerationList = () => {
  const [listOfUsers, setUserList] = useState([]);

  const refresh = () => {
    findAllUsers().then((users) => {
      const list = User.getListFromJsonArray(users);
      setUserList(list);
    });
  };

  const onDelete = () => {
    refresh();
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <ul className="list-group">
      {listOfUsers.map((user) => (
        <UserListItem key={user.id} onDelete={onDelete} userListItem={user} />
      ))}
      {listOfUsers.length === 0 && (
        <small className="text-muted">
          No User exists yet, once added it will appear here.
        </small>
      )}
    </ul>
  );
};

export default UserModerationList;
