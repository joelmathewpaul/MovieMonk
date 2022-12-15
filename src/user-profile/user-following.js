import {useEffect, useState} from "react";
import {findAllFollowing} from "../services/follow-service";
import FollowList from "../follow-list";

const UserFollowing = ({user}) => {

    const [following, setFollowing] = useState([]);

    useEffect(() => {
        // console.log(user)
        if (user.id){
             findAllFollowing(user.id).then(res => {
                setFollowing(res);
            })
        }}, [user]);

    return <div>
        <FollowList followList={following} cancelRequired={true}/>
    </div>
}


export default UserFollowing;