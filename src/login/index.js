import React from "react";
import Login from "./login";

const LoginSignup = () => {

  return (
    <div className="bg-success">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Login />
          </div>
          <div className="col-md-6">
            {/**Here register will come*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;