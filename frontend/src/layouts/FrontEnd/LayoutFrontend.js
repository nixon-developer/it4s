// IMPORT PACKAGES
import React from "react";
import { Outlet } from "react-router-dom";

// IMPORT COMPONENTS
import HeaderFrontend from "./HeaderFrontend";
import FooterFrontend from "./FooterFrontend";

// IMPORT SCSS
import "./LayoutFrontend.scss";

function LayoutFrontend() {
  return (
    <>
      <HeaderFrontend />
      <Outlet />
      <FooterFrontend />
    </>
  );
}

export default LayoutFrontend;
