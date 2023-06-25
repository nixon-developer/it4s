// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";

function WebDDLabel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="__webDDLabel">
      <div className="container-fluid py-5">
        <div className="row __even align-items-center">
          <div className="col-5 __content__col">
            <div data-aos="slide-left" className="__slide">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>Getting to know you</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Planning and mapping</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Content</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>Design</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Coding</h3>
                </div>
              </div>

              <div className="__box">
                <div className="__color __B01F69 my-2">
                  <h3>Testing</h3>
                </div>

                <div className="__color __009BA2 my-2">
                  <h3>Maintenance</h3>
                </div>

                <div className="__color __F58327 my-2">
                  <h3>Analysis</h3>
                </div>

                <div className="__color __2652A4 my-2">
                  <h3>Testing</h3>
                </div>

                <div className="__color __DE1E65 my-2">
                  <h3>Launch and beyond</h3>
                </div>
              </div>
            </div>

            <div className="__nonslide" direction="right">
              <div className="__box">
                <div className="__color __532D89 my-2">
                  <h3>Getting to know you</h3>
                </div>

                <div className="__color __E13126 my-2">
                  <h3>Planning and mapping</h3>
                </div>

                <div className="__color __00AEEF my-2">
                  <h3>Content</h3>
                </div>

                <div className="__color __FDB415 my-2">
                  <h3>Design</h3>
                </div>

                <div className="__color __30AF4A my-2">
                  <h3>Coding</h3>
                </div>
              </div>

              <div className="__box">
                <div className="__color __B01F69 my-2">
                  <h3>Testing</h3>
                </div>

                <div className="__color __009BA2 my-2">
                  <h3>Maintenance</h3>
                </div>

                <div className="__color __F58327 my-2">
                  <h3>Analysis</h3>
                </div>

                <div className="__color __2652A4 my-2">
                  <h3>Testing</h3>
                </div>

                <div className="__color __DE1E65 my-2">
                  <h3>Launch and beyond</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-7 __title__col">
            <div className="__title py-3">
              <div className="__title__line"></div>
              <h1>Web Design and Development</h1>
              <div className="__title__line"></div>
            </div>

            <p className="text-center">
              Professional
              <br />+<br />
              Responsive
              <br />+<br />
              successful
              <br />+<br />
              Search Engine Friendly Websites
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebDDLabel;
