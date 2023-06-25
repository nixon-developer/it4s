// IMPORT PACKAGES
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT COMPONENTS
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import Navbar from "../../components/Navbar/Navbar";

// IMPORT ICONS - LOCAL ASSETS
// import tel from "./../../assets/icons/socialIcons/tel.svg";
import mail from "./../../assets/icons/socialIcons/mail.svg";

function HeaderFrontend() {
  return (
    <div id="__header">
      {/* TOPBAR */}
      <div className="__topbar container py-3">
        <div className="row">
          <div className="__contact col-9">
            {/* <NavLink className="me-3" to="tel:+917559962990" target="_blank">
              <img
                src={tel}
                style={{ width: "18px" }}
                className="me-2"
                alt="Telephone"
              />
              <span>Call Us:</span>
              +91 7559962990
            </NavLink> */}

            <NavLink to="mailto:enquiry.it4s@gmail.com" target="_blank">
              <img
                src={mail}
                style={{ width: "18px" }}
                className="me-2"
                alt="Mail"
              />
              <span>Mail Us:</span>
              enquiry.it4s@gmail.com
            </NavLink>
          </div>

          {/* TOPBAR - SOCIAL ICONS */}
          <div className="__socialIcons col-3 d-flex justify-content-end">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="__navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default HeaderFrontend;
