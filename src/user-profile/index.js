import React from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import './index.css';
import Header from "../header";
import UserInfo from "./user-information";

/**
 * User Component to show the current profile page of the user.
 * @returns {JSX.Element}
 */
const Profile = () => {

    const user = useSelector(state => state.user)
    return (
        <div>
        <Header />
            <div className="backdrop-holder rounded-3" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
            }}></div>
            <div className={"row"}>
                <div className={"col-2"}>
                    <div className="d-flex flex-row pull-det-up">
                        <div className="ms-4 card-imgs rounded-circle">
                            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt={user.name} />
                        </div>
                        <div className="ps-4">
                            <h2 className="text-white fw-bold">{user.name}</h2>
                            <p className="text-success fw-bold"><Link to="/profile" style={{ textDecoration: 'none' }}>Edit Profile</Link></p>

                        </div>

                    </div>
                </div>
                <UserInfo/>
            </div>

            </div>

    );
}

export default Profile;