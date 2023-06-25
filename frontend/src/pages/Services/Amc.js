// IMPORT PACKAGES
import React from "react";

// IMPORT COMPONENTS
import AmcLabel from "../../components/Label/ServicesLabel/AmcLabel";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Services.scss";

function Amc() {
  return (
    <>
      <MetaData
        title={
          "NO: 1 AMC (ANNUAL MAINTENANCE CONTRACT) COMPANY IN INDIA AND UAE"
        }
      />

      <section className="__service">
        <div className="__servicesLabel">
          <AmcLabel />
        </div>

        <div className="__content container py-5">
          <div className="pb-5">
            <h2>AMC (Annual Maintenance Contract)</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              <span className="__subhead">It is Cost-Effective</span>
              AMC or Annual Maintenance Contract services are money savers. In
              addition to this, it saves a lot of time and effort. Through AMC,
              one can make the hardware and software protected at a minimal cost
              for a long time. Apart from this, it's also cheaper than hiring
              someone to take care of the equipment on a full-time basis.
              Therefore, many people consider AMCs the best solution as it does
              not require anyone to take care of the equipment, tools and
              technological aspects.
            </p>

            <p>
              <span className="__subhead">24/7 Operation</span>
              An individual availing the services coming under the terms and
              conditions of AMC (Annual Maintenance Contract) can get thorough
              guidance and support anytime.
            </p>

            <p>
              <span className="__subhead">Well-maintenance of the Devices</span>
              <br />
              Through AMC, an organisation can keep all the devices well-kept
              and fully functional. This makes organisation progress and
              enhances its business in the market amongst the other IT firms.
            </p>

            <p>
              <span className="__subhead">
                Expert Technicians in an Emergency Support
              </span>
              AMC or Annual Maintenance Contract is an agreement that consists
              of a wide range of expert tech professionals who are well-equipped
              and always available at the user's disposal whenever they need
              help. Professional technicians under AMC can get end-to-end
              hardware and software repair solutions.
            </p>

            <p>
              <span className="__subhead">Timely Maintenance</span>
              AMC (Annual Maintenance Contract) offers product longevity as the
              technicians constantly check the products and the parts to perform
              well consistently. During the contract time, they will work on the
              maintenance and repair of the devices. In contrast, the customers
              or users receive service notifications from time to time that will
              keep them updated with the work process.
            </p>

            <p>
              <span className="__subhead">Verified Products</span>
              Annual Maintenance Contract ensures the delivery of authentic
              products and technical advice. The users do not need to
              cross-check the items once they sign an annual maintenance
              contract.
            </p>
          </p>
        </div>
      </section>
    </>
  );
}

export default Amc;
