// IMPORT PACKAGES
import React from "react";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./AboutUs.scss";

function AboutUs() {
  return (
    <>
      <MetaData title={"TOP IT COMPANY IN INDIA AND UAE"} />

      <div className="__aboutus container py-5">
        <h2>Leading Managed IT service provider in India and UAE</h2>

        <div className="__content p-5 my-5">
          <div className="col-2">
            <div className="wave">
              <h3 style={{ "--i": 1 }}>A</h3>
              <h3 style={{ "--i": 2 }}>b</h3>
              <h3 style={{ "--i": 3 }}>o</h3>
              <h3 style={{ "--i": 4 }}>u</h3>
              <h3 style={{ "--i": 5 }}>t</h3>
              <h3 style={{ "--i": 5 }}>&nbsp;</h3>
              <h3 style={{ "--i": 6 }}>U</h3>
              <h3 style={{ "--i": 7 }}>s</h3>
            </div>
          </div>

          <div className="col-10 px-5">
            <p>
              At <span>IT 4 Supports</span>, we are passionate about leveraging
              technology to drive innovation and empower businesses. As a
              leading IT company, we specialize in delivering comprehensive
              solutions that address our clients' unique needs and challenges.
              With a team of skilled professionals and a customer-centric
              approach, we have established ourselves as a trusted partner in
              the ever-evolving world of technology.
            </p>
          </div>
        </div>

        <div className="__content p-5">
          <div className="col-2">
            <div className="wave">
              <h3 style={{ "--i": 8 }}>O</h3>
              <h3 style={{ "--i": 9 }}>u</h3>
              <h3 style={{ "--i": 10 }}>r</h3>
              <h3 style={{ "--i": 3 }}>&nbsp;</h3>
              <h3 style={{ "--i": 4 }}>M</h3>
              <h3 style={{ "--i": 5 }}>i</h3>
              <h3 style={{ "--i": 6 }}>s</h3>
              <h3 style={{ "--i": 7 }}>s</h3>
              <h3 style={{ "--i": 8 }}>i</h3>
              <h3 style={{ "--i": 9 }}>o</h3>
              <h3 style={{ "--i": 10 }}>n</h3>
            </div>
          </div>

          <div className="col-10 px-5">
            <p>
              Our mission is to provide cutting-edge IT solutions that enable
              businesses to thrive in the digital age. We aim to deliver
              superior value to our clients by combining technical expertise,
              industry insights, and a commitment to excellence. We strive to
              build long-term relationships based on trust, reliability, and
              exceptional service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
