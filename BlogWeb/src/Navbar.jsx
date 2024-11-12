import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/brand/logo/logo.svg"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" to="/">
                New Launches
              </NavLink>
              <NavLink className="nav-link" to="/Bikes">
                Bikes
              </NavLink>
              <NavLink className="nav-link" to="/Services">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
