// IMPORT PACKAGES
import React from "react";
import { Link, NavLink } from "react-router-dom";

// IMPORT COMPONENTS
import Dropdown from "./Dropdown";

// IMPORT ICONS - REACT-ICONS
import { CgMenuGridO, CgClose } from "react-icons/cg";

// IMPORT LOGO - LOCAL ASSETS
import logo from "./../../assets/logo/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="__logo">
          <a href="/">
            <img src={logo} style={{ width: "250px" }} alt="IT 4 Supports" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <CgMenuGridO size={40} className="__canvas__icon" />
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className="logo">
              <a href="/">
                <img
                  src={logo}
                  style={{ width: "200px" }}
                  alt="IT 4 Supports"
                />
              </a>
            </div>
            <button
              type="button"
              className="__canvas__icon"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <CgClose size={30} />
            </button>
          </div>
          <div className="offcanvas-body __items align-items-center">
            <ul className="navbar-nav ms-auto me-4">
              <li className="align-items-center">
                <NavLink className="__show__nav" to="/">
                  Home
                </NavLink>

                <a className="__show__mobile" href="/">
                  Home
                </a>
              </li>
              <li>
                <NavLink className="__show__nav" to="/aboutus">
                  About Us
                </NavLink>

                <a className="__show__mobile" href="/aboutus">
                  About Us
                </a>
              </li>

              {/* DROPDOWN */}
              <Dropdown />

              <li>
                <NavLink className="__show__nav" to="/careers">
                  Careers
                </NavLink>

                <a className="__show__mobile" href="/careers">
                  Careers
                </a>
              </li>
              <li>
                <NavLink className="__show__nav" to="/contact">
                  Contact Us
                </NavLink>

                <a className="__show__mobile" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="__btn">
              <Link to="/login" className="__show__nav btn __login">
                Log In
              </Link>

              <a href="/login" className="__show__mobile btn __login">
                Log In
              </a>
            </div>
            <div className="__btn">
              <NavLink to="/contact" className="__show__nav btn __quote">
                Get a Quote
              </NavLink>

              <a href="/contact" className="__show__mobile btn __quote">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
