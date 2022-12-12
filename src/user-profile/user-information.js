import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveUser} from "../reducers/user-reducer";

/**
 * Component with user information to be displayed on the profile page.
 */


const UserInfo = ({edit, onCancel = () => {}}) => {
    const user = useSelector(state => state.user)
    const dateJoined = new Date(user.joined);
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(user);

    const editHandler = (k, v) => {
        setProfile(profile => {
            return {
                ...profile,
                [k]: v,
            }
        });
    }

    const saveProfile = () => {
        dispatch(saveUser(profile));
    }

    return (
                <div className="ps-4 col-9 bg-light m-2 rounded-3">
                    <br/>
                    <h4 className="m-0 pe-3 text-success fw-bold">PERSONAL INFORMATION</h4>
                    <hr className={"text-muted"}/>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-user " />&nbsp;Name </h5>}
                        </div>
                        <div className={"col-4 border-start"}>
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><input type="text" className="form-control" id="name" placeholder={user.name} value={user.name}
                                                                                     onChange={(e) =>
                                                                                         editHandler("name", e.target.value)}/></h5>}
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-unlock-keyhole " />&nbsp;Password </h5>}
                        </div>
                        <div className={"col-4 border-start"}>
                            {edit && <h5 className="m-0 pe-3 text-muted pb-3"><input type="text" className="form-control" id="password" placeholder={user.password}
                                                                                     onChange={(e) =>
                                                                                         editHandler("password", e.target.value)}/></h5>}
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-envelope"/>&nbsp;Email </h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.email}</h5>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa fa-cake-candles"/>&nbsp;Date of Birth</h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">
                                                {edit && <input type="text" className="form-control" id="bio" placeholder={user.dob} onChange={(e) =>
                                                    editHandler("dob", e.target.value)}/>}
                                                {!edit && <span>
                                                    {user.dob || <span className="small fst-italic">no date of birth</span>}
                                                </span>}
                                            </h5>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-pen-to-square"/>&nbsp;Bio </h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">
                                                {edit && <input type="text" className="form-control" id="bio" placeholder={user.biography} onChange={(e) =>
                                                    editHandler("biography", e.target.value)}/>}
                                                {!edit && <span>
                                                    {user.biography || <span className="small fst-italic">no biography</span>}
                                                </span>}
                            </h5>
                        </div>
                    </div>
                    <br/>

                    <h4 className="m-0 pe-3 text-success fw-bold">ACCOUNT INFORMATION</h4>
                    <hr className={"text-muted"}/>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-calendar " />&nbsp;Joined </h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">{dateJoined.getMonth()+"/"+dateJoined.getDate()+"/"+dateJoined.getFullYear()}</h5>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-user " />&nbsp;Account Type </h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.accountType}</h5>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-circle-right"/>&nbsp;Followers </h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.followersCount}</h5>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-circle-left"/>&nbsp;Following </h5>
                        </div>

                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.followingCount}</h5>
                        </div>
                    </div>
                    <br/>
                        {edit && <div className="d-grid d-flex gap-2 mb-3 float-end">
                            <button type="button" className="btn btn-primary" onClick={saveProfile}>Apply Changes</button>
                            <button type="button" className="btn btn-secondary" onClick={onCancel}>Discard Changes</button>
                        </div>}

                </div>

    );
}

export default UserInfo;