import React from "react";
import Login from "./login";
import Register from "./register";

/**
 * Responsible for the login / register page.
 * Asks already existing users to login and new users to create account.
 */
const LoginSignup = () => {
  return (
    <div className="bg-success">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Login />
          </div>
          <div className="col-md-6">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
