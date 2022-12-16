import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../header";
import User from "../models/user";
import { getUserById } from "../services/user-service";
import { formatDate } from "../utils";
import { useSelector } from "react-redux";
import {
  addFollowing,
  deleteFollowing,
  findAllFollowing,
} from "../services/follow-service";
import { Modal } from "react-bootstrap";

/**
 * Responsible for handling the read only data
 */
const ReadOnlyUserInfo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const loggedInUser = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addFollowingOnClick = async () => {
    if (loggedInUser) {
      await addFollowing(loggedInUser.id, user.id);
      setIsFollowing(true);
      getUserDetails(user.id);
    } else {
      handleShow();
    }
  };

  const deleteFollowingOnClick = async () => {
    if (loggedInUser) {
      await deleteFollowing(loggedInUser.id, user.id);
      setIsFollowing(false);
      getUserDetails(user.id);
    }
  };

  const getUserDetails = async (uid) => {
    try {
      const dbUser = await getUserById(uid);
      const modelUser = User.getUserDetails(dbUser);
      setUser(modelUser);
      setLoading(false);
      if (loggedInUser) {
        findAllFollowing(loggedInUser.id).then((res) => {
          const matches = res.filter(
            (followedUser) => modelUser.id === followedUser._id
          );
          if (matches.length === 1) {
            // set here
            setIsFollowing(true);
          } else {
            // you didnt get a match
            setIsFollowing(false);
          }
        });
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    const paths = pathname.split("/");
    if (paths.length === 3) {
      const uid = paths[2];
      getUserDetails(uid);
    } else {
      navigate("/");
    }
  }, [pathname, loggedInUser, navigate]);

  return (
    !loading && (
      <div>
        <Header />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Follow</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-muted">
              You need to be logged in to do this operation
            </p>
          </Modal.Body>
        </Modal>
        <div className="container bg-white rounded-3 overflow-hidden">
          <div className="row">
            <div className="col ptrem mb-0">
              <div
                className="backdrop-holder rounded-3"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('${user.headerImage}')`,
                }}
              ></div>
              <div className="position-relative">
                <div className="d-flex flex-row pull-det-up w-100">
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
                  {!isFollowing && (
                    <div className="flex-fill text-end me-4">
                      <button
                        type="button"
                        className="btn btn-success rounded-pill"
                        onClick={addFollowingOnClick}
                      >
                        <i className="fa fa-check"></i>
                        <span className="ps-2">Follow</span>
                      </button>
                    </div>
                  )}

                  {isFollowing && (
                    <div className="flex-fill text-end me-4">
                      <button
                        type="button"
                        className="btn btn-danger rounded-pill"
                        onClick={deleteFollowingOnClick}
                      >
                        Unfollow
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="ptrem mb-0">
            <div className="row g-0">
              <div className="col pt-5 pb-3">
                {/** Here we have to show user details */}
                <div className="pt-3">
                  <span>Birthdate:</span> <span>{formatDate(user.dob)}</span>
                </div>
                <div className="pt-3">
                  <span>Joined:</span> <span>{formatDate(user.joined)}</span>
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
  );
};

export default ReadOnlyUserInfo;
