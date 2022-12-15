import React from "react";
import FollowListItem from "./follow-list-item";

/**
 * represents a follow list(follower/following) displayed as slideshow on the profile screen.
 * @constructor
 */
const FollowList = ({ followList = [] }) => {

    return (
        <div className="row">
            {
                followList.map((user) => {
                    return (
                        <div key={`${user.id}`} className="col-md-6 col-xl-4 mt-3">
                            <FollowListItem user={user} />
                        </div>
                    )
                })
            }

        </div>

    );
};
export default FollowList;