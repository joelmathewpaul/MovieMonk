import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../header";
import User from "../models/user";
import { getUserById } from "../services/user-service";
import { formatDate } from "../utils";

const ReadOnlyUserInfo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const paths = pathname.split("/");
    if (paths.length === 3) {
      const uid = paths[2];
      getUserById(uid).then(dbUser => {
        // we got the user
        const modelUser = User.getUserDetails(dbUser);
        setUser(modelUser);
        setLoading(false);
      }).catch(err => {
        navigate("/");
      })
    } else {
      navigate("/");
    }
  }, [pathname]);

  return (
    !loading && (
      <div>
        <Header />
        <div className="container bg-white rounded-3 overflow-hidden">
          <div className="row">
            <div className="col ptrem mb-0">
              <div className="backdrop-holder rounded-3" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('${user.headerImage}')`,
              }}></div>
              <div className="d-flex flex-row pull-det-up">
                <div className="ms-4 card-imgs user-thumb">
                  <img src={user.profilePhoto} alt="User Profile" />
                </div>
                <div className="ps-4">
                  <h4 className="text-white fw-bold">{user.name}</h4>
                  <div className="d-flex flex-row text-white">
                    <p className="pe-4">Followers: {user.followersCount}</p>
                    <p className="pe-4">Following: {user.followingCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ptrem mb-0">
            <div className="row g-0">
              <div className="col pt-5 pb-3">
                {/** Here we have to show user details */}
                <div className="pt-3">
                  <span>Birthdate:</span> <span>{formatDate(user.joined)}</span>
                </div>
                <div className="pt-3">
                  <span>Bio:</span> <span>{user.biography || "N/A"}</span>
                </div>
                <div className="pt-3">
                  <span>Account Type:</span> <span>{user.accountType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default ReadOnlyUserInfo;