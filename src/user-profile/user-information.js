import React, { useState } from "react";

/**
 * Component with user information to be displayed on the profile page including the edit-profile part.
 */
const UserInfo = ({ user, onCancel = () => {}, onSave = () => {} }) => {
  const [profile, setProfile] = useState(user);
  const [edit, setEdit] = useState(false);

  const editHandler = (k, v) => {
    setProfile((profile) => {
      return {
        ...profile,
        [k]: v,
      };
    });
  };

  const saveProfile = () => {
    setEdit(false);
    onSave(profile);
  };

  const cancelProfile = () => {
    setEdit(false);
    onCancel();
  };

  const formatDate = (sentOn) => {
    const postedOn = new Date(sentOn);
    const formattedDate = `${postedOn.getFullYear()}/${postedOn.getMonth()}/${postedOn.getDate()}`;
    return formattedDate;
  };

  return (
    <div className="row">
      <div className="ps-4 col rounded-3">
        <h6 className="pe-3 text-primary fw-bold d-flex flex-row justify-content-between">
          <span>PERSONAL INFORMATION</span>
          {!edit && (
            <button
              className="btn btn-sm btn-success rounded-pill ps-3 pe-3"
              onClick={() => setEdit(true)}
            >
              Edit Profile
            </button>
          )}
        </h6>
        <div className={"row"}>
          <div className={"col-3"}>
            {edit && (
              <h6 className="m-0 pe-3  pb-3">
                <i className="text-success fa-solid fa-user " />
                &nbsp;Name{" "}
              </h6>
            )}
          </div>
          <div className={"col-4 border-start"}>
            {edit && (
              <h6 className="m-0 pe-3  pb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={user.name}
                  value={user.name}
                  onChange={(e) => editHandler("name", e.target.value)}
                />
              </h6>
            )}
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-3"}>
            {edit && (
              <h6 className="m-0 pe-3  pb-3">
                <i className="text-success fa-solid fa-unlock-keyhole " />
                &nbsp;Password{" "}
              </h6>
            )}
          </div>
          <div className={"col-4 border-start"}>
            {edit && (
              <h6 className="m-0 pe-3  pb-3">
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder={user.password}
                  onChange={(e) => editHandler("password", e.target.value)}
                />
              </h6>
            )}
          </div>
        </div>

        <div className="row">
          <div className={"col-3"}>
            <h6 className="m-0 pe-3  pb-3">
              <i className="text-success fa-regular fa-envelope" />
              &nbsp;Email{" "}
            </h6>
          </div>
          <div className={"col-4 border-start"}>
            <h6 className="m-0 pe-3  pb-3">{user.email}</h6>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-3"}>
            <h6 className="m-0 pe-3  pb-3">
              <i className="text-success fa fa-cake-candles" />
              &nbsp;Date of Birth
            </h6>
          </div>
          <div className={"col-4 border-start"}>
            <h6 className="m-0 pe-3  pb-3">
              {edit && (
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  placeholder={user.dob}
                  onChange={(e) => editHandler("dob", e.target.value)}
                />
              )}
              {!edit && (
                <span>
                  {user.dob || (
                    <span className="small fst-italic">no date of birth</span>
                  )}
                </span>
              )}
            </h6>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-3"}>
            <h6 className="m-0 pe-3  pb-3">
              <i className="text-success fa-regular fa-pen-to-square" />
              &nbsp;Bio{" "}
            </h6>
          </div>
          <div className={"col-4 border-start"}>
            <h6 className="m-0 pe-3  pb-3">
              {edit && (
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  placeholder={user.biography}
                  onChange={(e) => editHandler("biography", e.target.value)}
                />
              )}
              {!edit && (
                <span>
                  {user.biography || (
                    <span className="small fst-italic">no biography</span>
                  )}
                </span>
              )}
            </h6>
          </div>
        </div>
        <br />

        <h6 className="mb-3 pe-3 fw-bold">ACCOUNT INFORMATION</h6>
        <div className={"row"}>
          <div className={"col-3"}>
            <h6 className="m-0 pe-3  pb-3">
              <i className="text-success fa-regular fa-calendar " />
              &nbsp;Joined{" "}
            </h6>
          </div>
          <div className={"col-4 border-start"}>
            <h6 className="m-0 pe-3  pb-3">{formatDate(user.joined)}</h6>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-3"}>
            <h6 className="m-0 pe-3  pb-3">
              <i className="text-success fa-solid fa-user " />
              &nbsp;Account Type{" "}
            </h6>
          </div>
          <div className={"col-4 border-start"}>
            <h6 className="m-0 pe-3  pb-3">{user.accountType}</h6>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-3"}>
            <h6 className="m-0 pe-3  pb-3">
              <i className="text-success fa-solid fa-circle-right" />
              &nbsp;Followers{" "}
            </h6>
          </div>
          <div className={"col-4 border-start"}>
            <h6 className="m-0 pe-3  pb-3">{user.followersCount}</h6>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-3"}>
            <h6 className="m-0 pe-3  pb-3">
              <i className="text-success fa-solid fa-circle-left" />
              &nbsp;Following{" "}
            </h6>
          </div>

          <div className={"col-4 border-start"}>
            <h6 className="m-0 pe-3  pb-3">{user.followingCount}</h6>
          </div>
        </div>
        <br />
        {edit && (
          <div className="d-grid d-flex gap-2 mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={saveProfile}
            >
              Apply Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cancelProfile}
            >
              Discard Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
