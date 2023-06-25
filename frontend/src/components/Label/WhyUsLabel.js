// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";

function WhyUsLabel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-fluid whyusLabel py-5">
      <div className="row">
        <div className="col-12">
          <div className="__title py-4">
            <h2 data-aos="fade-up">Why Us ?</h2>
          </div>
        </div>

        <div className="col-2 py-4">
          <div className="__content">
            <div className="wave">
              <h3 style={{ "--i": 1 }}>E</h3>
              <h3 style={{ "--i": 2 }}>x</h3>
              <h3 style={{ "--i": 3 }}>p</h3>
              <h3 style={{ "--i": 4 }}>e</h3>
              <h3 style={{ "--i": 5 }}>r</h3>
              <h3 style={{ "--i": 6 }}>i</h3>
              <h3 style={{ "--i": 7 }}>e</h3>
              <h3 style={{ "--i": 8 }}>n</h3>
              <h3 style={{ "--i": 9 }}>c</h3>
              <h3 style={{ "--i": 10 }}>e</h3>
            </div>

            <p>
              With years of experience in the industry, we bring deep technical
              expertise and a thorough understanding of industry best practices
              to every project we undertake.
            </p>
          </div>
        </div>

        <div className="col-2 py-4">
          <div className="__content">
            <div className="wave">
              <h3 style={{ "--i": 9 }}>F</h3>
              <h3 style={{ "--i": 10 }}>o</h3>
              <h3 style={{ "--i": 11 }}>c</h3>
              <h3 style={{ "--i": 12 }}>u</h3>
              <h3 style={{ "--i": 13 }}>s</h3>
            </div>
            <p>
              We prioritize our clients' success and work closely with them to
              understand their unique needs and deliver tailored solutions that
              exceed expectations.
            </p>
          </div>
        </div>

        <div className="col-2 py-4">
          <div className="__content">
            <div className="wave">
              <h3 style={{ "--i": 8 }}>Q</h3>
              <h3 style={{ "--i": 9 }}>u</h3>
              <h3 style={{ "--i": 10 }}>a</h3>
              <h3 style={{ "--i": 11 }}>l</h3>
              <h3 style={{ "--i": 12 }}>i</h3>
              <h3 style={{ "--i": 13 }}>t</h3>
              <h3 style={{ "--i": 14 }}>y</h3>
            </div>
            <p>
              We are committed to delivering high-quality solutions that are
              reliable, scalable, and future-proof, ensuring long-term value for
              our clients.
            </p>
          </div>
        </div>

        <div className="col-2 py-4">
          <div className="__content">
            <div className="wave">
              <h3 style={{ "--i": 1 }}>I</h3>
              <h3 style={{ "--i": 2 }}>n</h3>
              <h3 style={{ "--i": 3 }}>n</h3>
              <h3 style={{ "--i": 4 }}>o</h3>
              <h3 style={{ "--i": 5 }}>v</h3>
              <h3 style={{ "--i": 6 }}>a</h3>
              <h3 style={{ "--i": 7 }}>t</h3>
              <h3 style={{ "--i": 8 }}>i</h3>
              <h3 style={{ "--i": 9 }}>o</h3>
              <h3 style={{ "--i": 10 }}>n</h3>
            </div>
            <p>
              We stay up-to-date with the latest technologies and trends,
              enabling us to leverage innovative solutions that drive business
              growth and competitive advantage.
            </p>
          </div>
        </div>

        <div className="col-2 py-4">
          <div className="__content">
            <div className="wave">
              <h3 style={{ "--i": 1 }}>S</h3>
              <h3 style={{ "--i": 2 }}>u</h3>
              <h3 style={{ "--i": 3 }}>p</h3>
              <h3 style={{ "--i": 4 }}>p</h3>
              <h3 style={{ "--i": 5 }}>o</h3>
              <h3 style={{ "--i": 6 }}>r</h3>
              <h3 style={{ "--i": 7 }}>t</h3>
            </div>
            <p>
              Our dedicated support team is always available to address any
              queries or concerns, providing prompt assistance and ensuring a
              seamless experience throughout the engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsLabel;
