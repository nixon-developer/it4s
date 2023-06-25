// IMPORT PACKAGES
import React from "react";
import { NavLink } from "react-router-dom";

function Dropdown() {
  return (
    <li className="nav-item dropdown __service">
      <span
        className="dropdown-toggle d-flex align-items-center justify-content-center"
        data-bs-auto-close="outside"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Services
      </span>
      <ul className="dropdown-menu __service__menu __dropdown__menu">
        <li className="dropstart">
          <NavLink
            className="dropdown-item __show__nav"
            to="/service/infrastructure"
          >
            Infrastructure Management
          </NavLink>

          <a
            className="dropdown-item __show__mobile"
            href="/service/infrastructure"
          >
            Infrastructure Management
          </a>
        </li>

        <li className="dropstart">
          <NavLink
            className="dropdown-item __show__nav"
            to="/service/development"
          >
            Web Design and Development
          </NavLink>

          <a
            className="dropdown-item __show__mobile"
            href="/service/development"
          >
            Web Design and Development
          </a>
        </li>

        <li className="dropstart">
          <NavLink className="dropdown-item __show__nav" to="/service/security">
            Security System
          </NavLink>

          <a className="dropdown-item __show__mobile" href="/service/security">
            Security System
          </a>
        </li>

        <li className="dropstart">
          <NavLink
            className="dropdown-item __show__nav"
            to="/service/marketing"
          >
            Digital Marketing
          </NavLink>

          <a className="dropdown-item __show__mobile" href="/service/marketing">
            Digital Marketing
          </a>
        </li>

        <li className="dropstart">
          <NavLink className="dropdown-item __show__nav" to="/service/amc">
            Annual Maintence Contract
          </NavLink>

          <a className="dropdown-item __show__mobile" href="/service/amc">
            Annual Maintence Contract
          </a>
        </li>
      </ul>
    </li>
  );
}

export default Dropdown;
