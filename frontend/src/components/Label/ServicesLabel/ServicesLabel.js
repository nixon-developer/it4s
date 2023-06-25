// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";

// IMPORT COMPONENTS
import InfrastructureLabel from "./InfrastructureLabel";
import WebDDLabel from "./WebDDLabel";
import SecuritySystemLabel from "./SecuritySystemLabel";
import DigitalMarketingLabel from "./DigitalMarketingLabel";
import AmcLabel from "./AmcLabel";

function ServicesLabel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="__servicesLabel container-fluid py-5 px-3">
      <div className="__col">
        <div className="__title py-4">
          <h2 data-aos="fade-up">What We Do</h2>
        </div>

        <div className="__content mb-5">
          <InfrastructureLabel />
        </div>

        <div className="__content mb-5">
          <WebDDLabel />
        </div>

        <div className="__content mb-5">
          <SecuritySystemLabel />
        </div>

        <div className="__content mb-5">
          <DigitalMarketingLabel />
        </div>

        <div className="__content">
          <AmcLabel />
        </div>
      </div>
    </div>
  );
}

export default ServicesLabel;
