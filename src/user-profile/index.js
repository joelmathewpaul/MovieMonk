import React from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import './index.css';
import Header from "../header";

/**
 * User Component to show the current profile page of the user.
 * @returns {JSX.Element}
 */
const UserInfo = () => {

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
                    <p className="text-success fw-bold"><Link to="/edit-profile" style={{ textDecoration: 'none' }}>Edit Profile</Link></p>
                </div>

                </div>
            </div>
                <div className="ps-4 col-8 bg-light m-2 rounded-3">
                    <br/>

                    <h4 className="m-0 pe-3 text-success fw-bold">PERSONAL INFORMATION</h4>
                    <hr className={"text-muted"}/>
                    <div className={"row"}>
                        <div className={"col-3"}>
                    <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-envelope"/>&nbsp;Email </h5>
                    <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-pen-to-square"/>&nbsp;Bio </h5>
                    <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa fa-cake-candles"/>&nbsp;Date of Birth</h5>
                        </div>
                       <div className={"col-4 border-start"}>
                           <h5 className="m-0 pe-3 text-muted pb-3">{user.email}</h5>
                           <h5 className="m-0 pe-3 text-muted pb-3">-----bio placeholder-----</h5>
                           <h5 className="m-0 pe-3 text-muted pb-3">-----dob placeholder-----</h5>
                           </div>
                    </div>
                        <br/>

                    <h4 className="m-0 pe-3 text-success fw-bold">ACCOUNT INFORMATION</h4>
                    <hr className={"text-muted"}/>
                    <div className={"row mb-3"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-calendar " />&nbsp;Joined </h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-circle-right"/>&nbsp;Followers </h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-circle-left"/>&nbsp;Following </h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.joined}</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.followersCount}</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.followingCount}</h5>
                        </div>
                    </div>
                </div>

            </div>





        {/*    <div className="container bg-white rounded-3 overflow-hidden">*/}
        {/*<div className={"row"}>*/}
        {/*    <div className={"col-2 mt-3"}>*/}

        {/*        <img src={`/images/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgQf7qhC2axV7ByRudRC8JpTw6epaOJgEcCxmJZiKiQ&s`} className="img-fluid rounded-circle ms-3 me-3" />*/}
        {/*    </div>*/}



        {/*    <div className="d-flex float-end col-10">*/}

        {/*        <div>*/}
        {/*            <p className="mt-3 ps-2 fw-bold">{user.name}</p>*/}
        {/*            <p className="small mt-0 ps-2 text-muted">{user.email}</p>*/}
        {/*            <p className="text-muted ps-2">*/}
        {/*                <i className="text-success fa fa-calendar " /> Joined: {user.joined}</p>*/}
        {/*            <p className="text-muted ps-2">*/}
        {/*                <i className=" text-success fa fa-cake-candles" /> Born: {user.dob}*/}
        {/*            </p>*/}
        {/*            <Link to="/edit-profile" type="button" className="ps-2 btn btn-sm btn-success text-light fw-bold rounded-pill">Edit Profile</Link>*/}
        {/*        </div>*/}
        {/*    </div>*/}



        {/*</div>*/}

        {/*</div>*/}
            </div>

    );
}

export default UserInfo;