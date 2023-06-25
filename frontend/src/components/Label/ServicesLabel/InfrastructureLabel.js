// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";

function InfrastructureLabel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="__infrastructureLabel">
      <div className="container-fluid py-5">
        <div className="row __odd align-items-center">
          <div className="col-7 __title__col">
            <div className="__title py-3">
              <div className="__title__line"></div>
              <h1>Infrastructure Management Service</h1>
              <div className="__title__line"></div>
            </div>
            <p>
              With&nbsp;<span>IT 4 Supports</span>, you get a consulting firm
              that can help you build and manage your infrastructure for the
              challenges of today and tomorrow. Optimize your business, make
              your people more productive, and keep all your data safe. Most
              importantly, keep the peace of mind you need to focus on your
              vision.
            </p>
          </div>

          <div className="col-5 __content__col">
            <div data-aos="slide-right" className="__slide">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>Monitoring Services</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Device Management</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Storage Management</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>Middleware Operations</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Security</h3>
                </div>
              </div>

              <div className="__box">
                <div className="__color __B01F69 my-2">
                  <h3>Network</h3>
                </div>

                <div className="__color __009BA2 my-2">
                  <h3>Application Support</h3>
                </div>

                <div className="__color __F58327 my-2">
                  <h3>Server Management</h3>
                </div>

                <div className="__color __2652A4 my-2">
                  <h3>Database Management</h3>
                </div>

                <div className="__color __DE1E65 my-2">
                  <h3>Service Desk</h3>
                </div>
              </div>
            </div>

            <div className="__nonslide" direction="left">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>Monitoring Services</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Device Management</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Storage Management</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>Middleware Operations</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Security</h3>
                </div>
              </div>

              <div className="__box">
                <div className="__color __B01F69 my-2">
                  <h3>Network</h3>
                </div>

                <div className="__color __009BA2 my-2">
                  <h3>Application Support</h3>
                </div>

                <div className="__color __F58327 my-2">
                  <h3>Server Management</h3>
                </div>

                <div className="__color __2652A4 my-2">
                  <h3>Database Management</h3>
                </div>

                <div className="__color __DE1E65 my-2">
                  <h3>Service Desk</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfrastructureLabel;
