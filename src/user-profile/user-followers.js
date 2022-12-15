import {findAllFollowers} from "../services/follow-service";
import {useEffect, useState} from "react";
import FollowList from "../follow-list";

const UserFollowers = ({user}) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    findAllFollowers(user.id).then(res => {
   setFollowers(res);
    })
  }, []);
  return <div>
    <FollowList followList={followers}/>
  </div>
}

export default UserFollowers;