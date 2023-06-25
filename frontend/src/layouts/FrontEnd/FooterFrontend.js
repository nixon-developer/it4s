// IMPORT PACKAGES
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT COMPONENTS
import LabelBottom from "../../components/Label/LabelBottom";
import SocialIcons from "./../../components/SocialIcons/SocialIcons";

// IMPORT LOGO - LOCAL ASSETS
import logo from "./../../assets/logo/logo.png";

function FooterFrontend() {
  return (
    <div id="__footer" className="pt-5">
      <div className="__footer__support">
        <LabelBottom />
      </div>

      <div className="__footer__main">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-6 __content__left py-3">
              <div className="__logo">
                <img
                  src={logo}
                  style={{ width: "300px" }}
                  alt="IT 4 Supports"
                />
              </div>
              <p>
                IT 4 SUPPORTS provides responsive, professional IT support and
                technology services for your business, performing regular
                ongoing maintenance, monitoring, and backups - everything
                necessary to ensure an efficient, safe, and reliable IT
                environment
              </p>

              <div className="__contact">
                <p className="text-center">
                  <span>
                    Mail Us
                    <br />
                  </span>
                  <NavLink to="mailto:enquiry.it4s@gmail.com">
                    enquiry.it4s@gmail.com
                  </NavLink>
                </p>
                <p className="text-center">
                  <span>
                    Call Us
                    <br />
                  </span>
                  <span>INDIA</span>
                  <NavLink to="tel:+917559962990">+91 755 99 62 990</NavLink>
                  <br />
                  <span>UAE</span>
                  <NavLink to="tel:+971566512619">+97 156 65 12 619</NavLink>
                </p>

                <p className="text-center m-0">
                  <span>Connect with us</span>
                </p>
                <div className="__socialIcons d-flex justify-content-center align-items-center py-2">
                  <SocialIcons />
                </div>
              </div>
            </div>

            <div className="col-6 __content__right py-5">
              <h4>WHAT WE DO</h4>
              <p>
                <NavLink>Web / App Design and Development</NavLink>
              </p>

              <p>
                <NavLink>Structure Cabling and Networking</NavLink>
              </p>

              <p>
                <NavLink>CCTV System Installation and Maintenance</NavLink>
              </p>

              <p>
                <NavLink>Access Control Installation and Maintenance</NavLink>
              </p>

              <p>
                <NavLink>Custom Accounting Software Development</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="__footer__address">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-4 __title__one">
              <h5>Head Office</h5>
              <div className="__title__one__content">
                <h6>INDIA</h6>
                <p>
                  MKM Building, Kanippayyur <br />
                  Thrissur, Kerala, India
                </p>
              </div>
            </div>

            <div className="col-8 __title__two">
              <h5>Branch Office</h5>
              <div className="row text-center">
                <div className="col-6 __title__two__content">
                  <h6>INDIA</h6>
                  <p>
                    Thottupurathu Building, Koothattukulam <br />
                    Ernakulam, Kerala, India
                  </p>
                </div>

                <div className="col-6 __title__two__content">
                  <h6>UAE</h6>
                  <p>
                    P.O.Box: 86153 <br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="__footer__bottom">
        <div className="container-fluid __bottom">
          <div className="row">
            <p>
              Copyright &copy; 2015 - {new Date().getFullYear()}&nbsp; &nbsp;
              <span>
                <a href="/">IT 4 SUPPORTS</a>
              </span>
              . &nbsp; &nbsp;All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterFrontend;
