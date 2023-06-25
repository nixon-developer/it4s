// IMPORT PACKAGES
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT ICONS - LOCAL ASSETS
import mail from "./../../assets/icons/socialIcons/mail.svg";
import whatsapp from "./../../assets/icons/socialIcons/whatsapp.svg";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Careers.scss";

function Careers() {
  return (
    <>
      <MetaData title={"CAREERS"} />

      <div className="__career container text-center py-5">
        <h2>Careers</h2>

        <h3>
          IT 4 SUPPORTS has clients across the world and if you believe that you
          can help us conquer the skies and above, then, this is a golden
          opportunity for you. Come, be part of generation next!
        </h3>

        <div className="__content py-5">
          <h5>MARKETING EXECUTIVE</h5>

          <h6>Experience : 0 to 2 years</h6>
          <br />
          <h6>Send resume to enquiry.it4s@gmail.com or whatsapp us</h6>

          <div className="__btn">
            <NavLink to="mailto:enquiry.it4s@gmail.com" target="_blank">
              <img
                className="img-fluid"
                style={{ width: "15px" }}
                src={mail}
                alt="Mail"
              />
              Mail
            </NavLink>

            <NavLink to="https://wa.me/917559962990" target="_blank">
              <img
                className="img-fluid"
                style={{ width: "15px" }}
                src={whatsapp}
                alt="WhatsApp"
              />
              WhatsApp
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
