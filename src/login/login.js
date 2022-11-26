import React, { useState } from "react";
import { Button } from "react-bootstrap";

//function to create login page
const Login = () => {
  const [userCred, setUserCred] = useState({});
  const setEmail = (e) => {
    setUserCred((userCred) => {
      return {
        ...userCred,
        email: e.target.value,
      };
    });
  };
  const setPassword = (e) => {
    setUserCred((userCred) => {
      return {
        ...userCred,
        password: e.target.value,
      };
    });
  };

  const makeLogin = (e) => {
    e.preventDefault();
    //function to check if the credentials provided are valid and proceed with login
    return false;
  };

  return (
    <div className="loginpage p-5">
      <h4 className="text-white">Login Here!</h4>
      <form onSubmit={makeLogin}>
        <div className="input-group mt-3">
          <div className="form-floating">
            <input
              required={true}
              onChange={setEmail}
              value={userCred.email}
              type="email"
              className="form-control rounded-pill"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="text-muted">
              <i className="fa fa-user p-2"></i>Email
            </label>
          </div>
        </div>
        <br />
        <div className="input-group mb-4 mt-2">
          <div className="form-floating">
            <input
              required={true}
              onChange={setPassword}
              value={userCred.password}
              type="password"
              className="form-control rounded-pill"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword" className="text-muted">
              <i className="fa fa-lock p-2"></i>Password
            </label>
          </div>
        </div>
        <Button
          variant="primary"
          type="submit"
          size="lg"
          className="rounded-pill ps-5 pe-5"
        >
          Sign In
        </Button>
        <div className="mt-3">
          <a href="#" className="text-white">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};
export default Login;
