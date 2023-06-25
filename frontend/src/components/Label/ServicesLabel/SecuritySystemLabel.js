// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";

function SecuritySystemLabel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="__securitySystemLabel">
      <div className="container-fluid py-5">
        <div className="row __odd align-items-center">
          <div className="col-7 __title__col">
            <div className="__title py-3">
              <div className="__title__line"></div>
              <h1>Security System</h1>
              <div className="__title__line"></div>
            </div>

            <p className="text-center">
              Our system will give you total security.
            </p>
          </div>

          <div className="col-5 __content__col">
            <div data-aos="slide-right" className="__slide">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>CCTV Solutions</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Biometrics</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Smart Cards</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>ID Cards</h3>
                </div>
              </div>

              <div className="__box">
                <div className="__color __30AF4A my-2">
                  <h3>Security doors</h3>
                </div>

                <div className="__color __B01F69 my-2">
                  <h3>Remote access</h3>
                </div>

                <div className="__color __009BA2 my-2">
                  <h3>Time and attendance system</h3>
                </div>

                <div className="__color __F58327 my-2">
                  <h3>Boom Barriers</h3>
                </div>
              </div>
            </div>

            <div className="__nonslide" direction="left">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>CCTV Solutions</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Biometrics</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Smart Cards</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>ID Cards</h3>
                </div>
              </div>

              <div className="__box">
                <div className="__color __30AF4A my-2">
                  <h3>Security doors</h3>
                </div>

                <div className="__color __B01F69 my-2">
                  <h3>Remote access</h3>
                </div>

                <div className="__color __009BA2 my-2">
                  <h3>Time and attendance system</h3>
                </div>

                <div className="__color __F58327 my-2">
                  <h3>Boom Barriers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySystemLabel;
