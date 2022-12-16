import { findAllFollowers } from "../services/follow-service";
import { useEffect, useState } from "react";
import FollowList from "../follow-list";

const UserFollowers = ({ user }) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user.id) {
      findAllFollowers(user.id).then(res => {
        setFollowers(res);
        setLoading(false);
      });
    }
  }, [user]);

  return !loading &&
    <FollowList followList={followers} />
}

export default UserFollowers;