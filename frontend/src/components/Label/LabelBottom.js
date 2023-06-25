// IMPORT PACKAGES
import React from "react";

// IMPORT ICONS - LOCAL ASSETS
import hrs from "./../../assets/icons/labelIcons/hrs.png";
import expert from "./../../assets/icons/labelIcons/expert.png";

function LabelBottom() {
  return (
    <section className="__support">
      <div className="container py-2">
        <div className="row">
          <div className="col-6 __support__content">
            <div className="__content">
              <img
                src={hrs}
                className="img-fluid"
                style={{ width: "50px" }}
                alt="24 Hours"
              />
              <p>
                Our experts provide
                <br />
                IT support in
                <br />
                UAE, INDIA 24/7
              </p>
            </div>
          </div>

          <div className="col-6 __support__content">
            <div className="__content">
              <img
                src={expert}
                className="img-fluid"
                style={{ width: "50px" }}
                alt="IT Expert"
              />
              <p>
                Our team are trained
                <br />
                and certified to
                <br />
                provide IT support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LabelBottom;
