import React from "react";
import { Link } from "react-router-dom";
import {Button, ButtonGroup, Dropdown} from "react-bootstrap";
const Header = (user) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4">
      <div className="container">
          <Link to="/" className="navbar-brand fw-bold d-flex d-flex-row align-items-center">
            <img src="/logo.png" height={30} />
            <span className="ps-3">MovieMonk</span>
          </Link>
        <input className="form-control   rounded-pill ps-4 " type="search" placeholder="Search" aria-label="Search" />
          <div className="d-flex ms-5">
          <div className="d-flex align-items-center">
            <div className="d-block pt-3">
            <i className='fa fa-list fa-xl text-success pe-5 ps-2 mt-3'></i>
              <p className="text-success">Playlist</p>
            </div>
            {/*false(line 18) and true(line 20) should be replace with if userloggedin or not*/}

            {false && <Button variant="success" className="btn btn-circle text-sm-start">Login/SignUp</Button>}

            {
              true && <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="success" className="rounded-pill"><i className="fa fa-user"></i></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">To be filled</Dropdown.Item>
                <Dropdown.Item href="#/action-2">To be filled</Dropdown.Item>
                <Dropdown.Item href="#/action-2">To be filled</Dropdown.Item>
                <Dropdown.Item href="#/action-2">To be filled</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            }
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Header;