import React from "react";
import FollowListItem from "./follow-list-item";

/**
 * represents a follow list(follower/following) displayed as slideshow on the profile screen.
 * @constructor
 */
const FollowList = ({ followList = [],cancelRequired }) => {

    return (

        <div className="row">
            {
                followList &&
                (followList.map((user) => {
                    return (
                        <div key={`${user.id}`} className="col-md-6 col-xl-4 mt-3">
                            <FollowListItem followUser={user} cancelRequired={cancelRequired} />
                        </div>
                    )
                }))
            }
            {!followList && <h2>You are currently not following any user</h2>}

        </div>

    );
};
export default FollowList;