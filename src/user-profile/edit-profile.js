import React from "react";
import './index.css';
import Header from "../header";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

/**
 * User Component to show the current profile page of the user.
 * @returns {JSX.Element}
 */
const EditProfile = () => {
    const user = useSelector(state => state.user)
    return (
        <div>
        <Header/>
        <div className="ps-4">
            <Link to="/profile" style={{ textDecoration: 'none' }}>Back</Link>
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
                        </div>

                    </div>
                </div>
                <div className="ps-4 col-8 bg-light m-2 rounded-3">
                    <br/>
                    <form>

                    <h4 className="m-0 pe-3 text-success fw-bold">PERSONAL INFORMATION</h4>
                    <hr className={"text-muted"}/>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-envelope"/>&nbsp;Email </h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa fa-cake-candles"/>&nbsp;Date of Birth</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-regular fa-pen-to-square"/>&nbsp;Bio </h5>

                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3">{user.email}</h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"> <input type="text" className="form-control" id="bio" placeholder="Enter Date of Birth"/></h5>
                            <h5 className="m-0 pe-3 text-muted pb-3">
                                <textarea className="form-control" id="bio" rows="3"
                                          spellCheck="false"  placeholder="Enter Bio"/>
                               </h5>

                        </div>
                    </div>
                    <br/>

                    <h4 className="m-0 pe-3 text-success fw-bold">ACCOUNT INFORMATION</h4>
                    <hr className={"text-muted"}/>
                    <div className={"row mb-3"}>
                        <div className={"col-3"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-circle-right"/>&nbsp;Account Type </h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-unlock-keyhole " />&nbsp;Password </h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><i className="text-success fa-solid fa-unlock-keyhole "/>&nbsp;Confirm Password </h5>
                        </div>
                        <div className={"col-4 border-start"}>
                            <h5 className="m-0 pe-3 text-muted pb-3"><input type="text" className="form-control" id="password" placeholder="Enter new password" value={user.accountType}/></h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><input type="text" className="form-control" id="password" placeholder="Enter new password"/></h5>
                            <h5 className="m-0 pe-3 text-muted pb-3"><input type="text" className="form-control" id="confirmPassword" placeholder="Confirm new password"/></h5>
                        </div>
                    </div>
                    <div className="d-grid d-flex gap-2 mb-3 float-end">
                    <button type="button" className="btn btn-success">Apply Changes</button>
                        <button type="button" className="btn btn-success">Discard Changes</button>
                    </div>
                    </form>
                </div>

            </div>
        </div>
        </div>
    )
}

export default EditProfile;

