import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold d-flex d-flex-row align-items-center">
          <img src="/logo.png" height={30} />
          <span className="ps-3">MovieMonk</span>
        </Link>
        <div className="d-flex">
          {/* here you will code, remove once you are done, feel free to modify things below  */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;