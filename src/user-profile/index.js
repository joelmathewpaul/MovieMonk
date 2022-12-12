import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import { saveUser } from "../reducers/user-reducer";
import { getProfile } from "../services/auth-service";
import UserNavigation from "../user-navigation";
import UserInfo from "./user-information";

/**
 * Profile Component to show the current profile page of the user that includes account information, followers, following, movie reviews etc.
 * @returns {JSX.Element}
 */
const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [loading, setLoading] = useState(user ? false : true);

    useEffect(() => {
        getProfile().then(dbUser => {
            dispatch(saveUser(dbUser));
            setLoading(false);
        }).catch(error => {
            //user is not logged in
            navigate("/login");
        });
    }, []);

    return (
        !loading && (
            <div>
                <Header />
                <div className="container bg-white rounded-3 overflow-hidden">
                    <div className="row">
                        <div className="col ptrem mb-0">
                            <div className="backdrop-holder rounded-3" style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
                            }}></div>
                            <div className="d-flex flex-row pull-det-up">
                                <div className="ms-4 card-imgs user-thumb">
                                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="User Profile" />
                                </div>
                                <div className="ps-4">
                                    <h4 className="text-white fw-bold">{user.name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ptrem mb-0">
                        <div className="row g-0">
                            <div className="col-md-3 pt-5 pb-3">
                                <div className="pt-3 pe-3">
                                    <UserNavigation />
                                </div>
                            </div>
                            <div className="col-md-9 pt-3 pb-3 bg-light">
                                <UserInfo user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Profile;