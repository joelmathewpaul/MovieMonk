import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
const Header = (user) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold d-flex d-flex-row align-items-center">
          <img src="/logo.png" height={30} />
          <span className="ps-3">MovieMonk</span>
        </Link>
        <input className="form-control rounded-pill mt-3 mt-lg-0 ps-4 ms-lg-5 me-lg-5" type="search" placeholder="Search movies, genres, actor ..." aria-label="Search" />
        <div className="d-flex align-items-center mt-3 mt-lg-0">
          <button type="button" class="me-3 btn d-flex rounded-pill align-items-center btn-outline-success">
            <i className="fa fa-list"></i>
            <span className="ps-3">Watchlist</span>
          </button>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="success" className="rounded-pill"><i className="fa fa-user"></i> Joel</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default Header;