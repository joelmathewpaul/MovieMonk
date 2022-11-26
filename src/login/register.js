import React, { useState } from "react";
import { Button } from "react-bootstrap";

//function to create register page
const Register = () => {
    const [userCred, setUserCred] = useState({});
    const setName = (e) => {
        setUserCred((userCred) => {
            return {
                ...userCred,
                name: (e.target.value),
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
    const setPhone = (e) => {
        setUserCred((userCred) => {
            return {
                ...userCred,
                phone: e.target.value,
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

    const makeSignUp = (e) => {
        e.preventDefault();
        //function to check if the credentials provided are valid and proceed with login
        if (userCred.password!== userCred.confirmPassword){
            alert("Passwords don't match! Please try again!");
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
                            <i className="fa fa-user p-2"/>Name
                        </label>
                    </div>
                </div>
            <br/>
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
                            <i className="fa-solid fa-id-card p-2"/>Email
                        </label>
                    </div>
                </div>
                <br />
                <div className="input-group mt-2">
                    <div className="form-floating">
                        <input
                            onChange={setPhone}
                            value={userCred.phone}
                            type="tel"
                            className="form-control rounded-pill"
                            id="floatingInput"
                            placeholder="(area code)-xxx-xxxx"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        />
                        <label htmlFor="floatingInput" className="text-muted">
                            <i className="fa fa-phone p-2"/>Phone
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
                            <i className="fa fa-lock p-2"/>Password
                        </label>
                    </div>
                </div>
                <br/>
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
                            <i className="fa fa-lock p-2"/>Confirm Password
                        </label>
                    </div>
                </div>
                <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="rounded-pill ps-5 pe-5">
                    Sign Up
                </Button>
                <div className="mt-3">
                    <a href="#" className="text-white">
                        Already have an account? Sign In!
                    </a>
                </div>
            </form>
        </div>
    );
};
export default Register;
