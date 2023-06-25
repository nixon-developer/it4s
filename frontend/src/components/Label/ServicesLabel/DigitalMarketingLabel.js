// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";

function DigitalMarketingLabel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="__digitalMarketingLabel">
      <div className="container-fluid py-5">
        <div className="row __even align-items-center">
          <div className="col-5 __content__col">
            <div data-aos="slide-left" className="__slide">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>Search Engine Optimization (SEO)</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Search Engine Marketing (SEM)</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Social Media Marketing (SMM)</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>SMS Marketing</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Email Marketing</h3>
                </div>
              </div>
            </div>

            <div className="__nonslide">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>Search Engine Optimization (SEO)</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Search Engine Marketing (SEM)</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Social Media Marketing (SMM)</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>SMS Marketing</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Email Marketing</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-7 __title__col">
            <div className="__title py-3">
              <div className="__title__line"></div>
              <h1>Digital Marketing</h1>
              <div className="__title__line"></div>
            </div>

            <p className="text-center">
              With Ongoing Monitoring, Optimization and Reporting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalMarketingLabel;
