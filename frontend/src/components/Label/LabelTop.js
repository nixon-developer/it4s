// IMPORT PACKAGES
import React from "react";

// IMPORT ICONS - LOCAL ASSETS
import security from "./../../assets/icons/labelIcons/security.svg";
import networking from "./../../assets/icons/labelIcons/networking.svg";
import erp from "./../../assets/icons/labelIcons/erp.png";
import webDesigning from "./../../assets/icons/labelIcons/WebDesigning.svg";

function LabelTop() {
  return (
    <div className="container-fluid __label__top px-3">
      <div className="row">
        <div className="col-3 py-5">
          <div className="__content">
            <img
              src={webDesigning}
              className="img-fluid"
              style={{ width: "50px" }}
              alt="Web Designing"
            />
            <h3>
              Web Design &
              <span>
                <br />
              </span>
              Development
            </h3>
            <p>
              Our team of skilled web developers creates stunning websites and
              web applications that enhance your online presence and engage your
              target audience.
            </p>
          </div>
        </div>

        <div className="col-3 py-5">
          <div className="__content">
            <img
              src={networking}
              className="img-fluid"
              style={{ width: "50px" }}
              alt="Networking"
            />
            <h3>
              IT Networking &
              <span>
                <br />
              </span>
              Infra Setup
            </h3>
            <p>
              The design and implementation of hardware, software, databases and
              computer networks.
            </p>
          </div>
        </div>

        <div className="col-3 py-5">
          <div className="__content">
            <img
              src={security}
              className="img-fluid"
              style={{ width: "50px" }}
              alt="Security"
            />
            <h3>
              Security Systems &
              <span>
                <br />
              </span>
              Surveillance
            </h3>
            <p>
              We provide CCTV Installation & maintenance, Time Attendance &
              Access Control.
            </p>
          </div>
        </div>

        <div className="col-3 py-5">
          <div className="__content">
            <img
              src={erp}
              className="img-fluid"
              style={{ width: "50px" }}
              alt="Software"
            />
            <h3>
              Software
              <span>
                <br />
              </span>
              Development
            </h3>
            <p>
              We develop custom software applications tailored to meet your
              specific requirements, ensuring seamless integration and optimal
              performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabelTop;
