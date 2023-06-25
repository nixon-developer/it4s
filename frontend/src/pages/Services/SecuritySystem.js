// IMPORT PACKAGES
import React from "react";

// IMPORT COMPONENTS
import SecuritySystemLabel from "../../components/Label/ServicesLabel/SecuritySystemLabel";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Services.scss";

function SecuritySystem() {
  return (
    <>
      <MetaData
        title={
          "NO: 1 CCTV | ACCESS CONTROL | MAINTENANCE AND SERVICES COMPANY IN INDIA AND UAE"
        }
      />

      <div className="__service">
        <div className="__servicesLabel">
          <SecuritySystemLabel />
        </div>

        <div className="__content container py-5">
          <div className="pb-5">
            <h2>CCTV Surveillance</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              IT 4 Supports offers the latest CCTV Technology and provide
              excellent service engineers and installation of CCTV equipment.
            </p>

            <p>
              We can provide a professional solution to all of your security
              requirements, from households to small organizations to large
              companies. Our fully qualified engineers are able to take a
              project from an initial advisory meeting and on-site survey right
              through to implementation and testing. We believe in working
              closely with the customer to achieve the best results.
            </p>
          </p>

          <div className="py-5">
            <h2>Access Control System</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              IT 4 Supports offers State-of-the-art access control software that
              integrates the most advanced security technologies with innovative
              networking capabilities to bring you full-featured security
              solutions serving any size facility. We provide you with the
              technology you need to deliver sophisticated security solutions
              from the simplest to the most challenging.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default SecuritySystem;
