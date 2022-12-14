import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deleteUser, saveUser } from "../reducers/user-reducer";
import { signup } from "../services/auth-service";
import User from "../models/user";

//function to create register page
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userCred, setUserCred] = useState({});
  const setName = (e) => {
    setUserCred((userCred) => {
      return {
        ...userCred,
        name: e.target.value,
      };
    });
  };

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
  const setConfirmPassword = (e) => {
    setUserCred((userCred) => {
      return {
        ...userCred,
        confirmPassword: e.target.value,
      };
    });
  };

  const makeSignUp = async (e) => {
    e.preventDefault();
    //function to check if the credentials provided are valid and proceed with login
    if (userCred.password !== userCred.confirmPassword) {
      alert("Passwords don't match! Please try again!");
      return false;
    }
    try {
      const dbUser = await signup(userCred);
      const modelUser = User.getUserDetails(dbUser);
      dispatch(saveUser(modelUser));
      navigate("/");
    } catch (error) {
      dispatch(deleteUser());
      alert(error.message);
    }
    return false;
  };

  return (
    <div className="registerPage p-5">
      <h4 className="text-white">Sign up Here!</h4>
      <form onSubmit={makeSignUp}>
        <div className="input-group mt-3">
          <div className="form-floating">
            <input
              required={true}
              onChange={setName}
              value={userCred.name}
              type="text"
              className="form-control rounded-pill"
              id="floatingName"
              placeholder="Enter your first and last name e.g., John Doe"
            />
            <label htmlFor="floatingInput" className="text-muted">
              <i className="fa fa-user p-2" />
              Name
            </label>
          </div>
        </div>
        <br />
        <div className="input-group mt-2">
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
              <i className="fa-solid fa-id-card p-2" />
              Email
            </label>
          </div>
        </div>
        <br />
        <div className="input-group mt-2">
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
              <i className="fa fa-lock p-2" />
              Password
            </label>
          </div>
        </div>
        <br />
        <div className="input-group mb-4 mt-2">
          <div className="form-floating">
            <input
              required={true}
              onChange={setConfirmPassword}
              value={userCred.confirmPassword}
              type="password"
              className="form-control rounded-pill"
              id="floatingPassword2"
              placeholder="Re-enter Password"
            />
            <label htmlFor="floatingConfirmPassword" className="text-muted">
              <i className="fa fa-lock p-2" />
              Confirm Password
            </label>
          </div>
        </div>
        <Button
          variant="primary"
          type="submit"
          size="lg"
          className="rounded-pill ps-5 pe-5"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default Register;
