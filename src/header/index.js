import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { signOut } from "../services/auth-service";
import { deleteUser } from "../reducers/user-reducer";

const Header = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const q = queryParams.get("query");

  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [query, setQuery] = useState(q || "");

  const searchNow = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
    return false;
  }

  const signOutUser = async (e) => {
    e.preventDefault();
    await signOut();
    deleteUser();
    return false;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold d-flex d-flex-row align-items-center">
          <img src="/logo.png" height={30} alt="" />
          <span className="ps-3">MovieMonk</span>
        </Link>
        <form method="GET" onSubmit={searchNow} className="d-flex flex-fill">
          <input className="form-control rounded-pill mt-3 mt-lg-0 ps-4 ms-lg-5 me-lg-5" type="text" placeholder="Search movies, genres, actor ..." aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} required />
        </form>
        <div className="d-flex align-items-center mt-3 mt-lg-0">
          {user && (
            <>
              <Link to="/profile/my-watchlist" className="me-3 btn d-flex rounded-pill align-items-center btn-outline-success">
                <i className="fa fa-list"></i>
                <span className="ps-3">Watchlist</span>
              </Link>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="success" className="rounded-pill"><i className="fa fa-user"></i> {user.name}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link className="dropdown-item" to="/profile">My Profile</Link>
                  <Link className="dropdown-item" to="/signout" onClick={signOutUser}>Sign Out</Link>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
          {!user && (
            <>
              <span className="ps-3 pe-3 text-white">Hi, User</span>
              <Link to="/login" type="button" className="me-3 btn d-flex rounded-pill align-items-center btn-success">
                <i className="fa fa-user" />
                <span className="ps-3">Login / Signup</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;