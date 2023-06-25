// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";

function AmcLabel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="__amcLabel">
      <div className="container-fluid py-5">
        <div className="row __odd align-items-center">
          <div className="col-7 __title__col">
            <div className="__title py-3">
              <div className="__title__line"></div>
              <h1>AMC (Annual Maintenance Contract)</h1>
              <div className="__title__line"></div>
            </div>

            <p>
              With AMC, a business is Secured, Profitable, and Reliable. It
              includes regular check-ups of networks, servers, infrastructure,
              and spare parts of the devices if required. It is a backbone from
              small to big scale business organizations that quickly provide
              standardized maintenance services.
            </p>
          </div>

          <div className="col-5 __content__col">
            <div data-aos="slide-right" className="__slide">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>It is Cost-Effective</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Well-maintenance of the Devices</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Expert Technicians in an Emergency Support</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>Timely Maintenance</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Verified Products</h3>
                </div>
              </div>
            </div>

            <div className="__nonslide" direction="left">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>It is Cost-Effective</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Well-maintenance of the Devices</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Expert Technicians in an Emergency Support</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>Timely Maintenance</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Verified Products</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmcLabel;
