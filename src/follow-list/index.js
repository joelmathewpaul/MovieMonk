import React from "react";
import FollowListItem from "./follow-list-item";

/**
 * represents a follow list(follower/following) displayed as slideshow on the profile screen.
 * @constructor
 */
const FollowList = ({ followList = [], cancelRequired, onCancel }) => {

    return (
        <>
            {followList.length > 0 &&
                (<div className="row">
                    {
                        followList.map((user) => {
                            return (
                                <FollowListItem followUser={user} key={`${user.id}`} cancelRequired={cancelRequired} onCancel={onCancel} />
                            )
                        })
                    }
                </div>
                )}
            {followList.length === 0 && (
                <p className="text-muted">This list is empty.</p>
            )}
        </>
    );
};
export default FollowList;