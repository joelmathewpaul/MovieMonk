import { useEffect, useState } from "react";
import { findAllFollowing } from "../services/follow-service";
import FollowList from "../follow-list";

const UserFollowing = ({ user }) => {

    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(true);

    const findFollowings = () => {
        if (user.id) {
            findAllFollowing(user.id).then(res => {
                setFollowing(res);
                setLoading(false);
            });
        }
    }

    useEffect(() => {
        findFollowings();
    }, [user]);

    return !loading &&
        <FollowList followList={following} cancelRequired={true} onCancel={findFollowings} />
}


export default UserFollowing;