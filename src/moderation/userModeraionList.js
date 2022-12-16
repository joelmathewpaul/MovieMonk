import { useEffect, useState } from "react";
import { findAllUsers } from "../services/user-service";
import User from "../models/user";
import UserList from "../user-profile/user-list";

const UserModerationList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    findAllUsers().then((users) => {
      const list = User.getListFromJsonArray(users);
      setUserList(list);
    });
  }, []);
  return <UserList userList={userList} />;
};

export default UserModerationList;
