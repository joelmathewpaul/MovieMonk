import Profile from "./index";
import Header from "../header";
import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

/**
 * Component with user information to be displayed on the profile page.
 */


const UserInfo = ({edit}) => {
    const user = useSelector(state => state.user)
    const dateJoined = new Date(user.joined);

    return (
        <div>
                <div className="ps-4 col-8 bg-light m-2 rounded-3">
                    <br/>
                    <h4 className="m-0 pe-3 text-success fw-bold">PERSONAL INFORMATION</h4>
                    <hr className={"text-muted"}/>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-user " />&nbsp;Name </h5>}
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-unlock-keyhole " />&nbsp;Password </h5>}
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-envelope"/>&nbsp;Email </h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa fa-cake-candles"/>&nbsp;Date of Birth</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-pen-to-square"/>&nbsp;Bio </h5>

                        </div>
                        <div className={"col-4 border-start"}>
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><input type="text" className="form-control" id="name" placeholder={user.name}/></h5>}
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><input type="text" className="form-control" id="password" placeholder={user.password}/></h5>}
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.email}</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3">
                                {edit && <input type="text" className="form-control" id="bio" placeholder={user.dob}/>}
                                {!edit && <span>
                                    {user.dob || <span className="small fst-italic">no date of birth</span>}
                                </span>}
                            </h5>
                            <h5 className="m-0 pe-3 text-muted pb-3">
                                {edit && <input type="text" className="form-control" id="bio" placeholder={user.biography}/>}
                                {!edit && <span>
                                    {user.biography || <span className="small fst-italic">no biography</span>}
                                </span>}
                            </h5>
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
                            <h5 className="m-0 pe-3 text-muted pb-3">{dateJoined.getMonth()+"/"+dateJoined.getDate()+"/"+dateJoined.getFullYear()}</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.followersCount}</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.followingCount}</h5>
                        </div>
                        {edit && <div className="d-grid d-flex gap-2 mb-3 float-end">
                            <button type="button" className="btn btn-primary">Apply Changes</button>
                            <button type="button" className="btn btn-secondary">Discard Changes</button>
                        </div>}
                    </div>

                </div>


        </div>

    );
}

export default UserInfo;