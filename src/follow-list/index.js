import React from "react";
import FollowListItem from "./follow-list-item";

/**
 * represents a follow list(follower/following) displayed as slideshow on the profile screen.
 * @constructor
 */
const FollowList = ({ followList = [], cancelRequired }) => {

    return (

        <div className="row">
            {
                followList.map((user) => {
                    return (
                        <FollowListItem followUser={user} key={`${user.id}`} cancelRequired={cancelRequired} />
                    )
                })
            }
        </div>

    );
};
export default FollowList;