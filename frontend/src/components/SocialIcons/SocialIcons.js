// IMPORT PACKAGES
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT ICONS - LOCAL ASSETS
import facebook from "./../../assets/icons/socialIcons/facebook.svg";
import instagram from "./../../assets/icons/socialIcons/instagram.svg";
import linkedin from "./../../assets/icons/socialIcons/linkedin.svg";
import whatsapp from "./../../assets/icons/socialIcons/whatsapp.svg";

function SocialIcons() {
  return (
    <>
      <div className="__icon me-4">
        <NavLink to="https://www.facebook.com/it4supports" target="_blank">
          <img src={facebook} style={{ width: "18px" }} alt="Facebook" />
        </NavLink>
      </div>

      <div className="__icon me-4">
        <NavLink to="https://www.instagram.com/it4supports" target="_blank">
          <img src={instagram} style={{ width: "18px" }} alt="Instagram" />
        </NavLink>
      </div>

      <div className="__icon me-4">
        <NavLink>
          <img src={linkedin} style={{ width: "18px" }} alt="Linkedin" />
        </NavLink>
      </div>

      <div className="__icon">
        <NavLink to="https://wa.me/917559962990" target="_blank">
          <img src={whatsapp} style={{ width: "18px" }} alt="WhatsApp" />
        </NavLink>
      </div>
    </>
  );
}

export default SocialIcons;
