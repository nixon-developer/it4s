// IMPORT PACKAGES
import React, { useEffect } from "react";
import Aos from "aos";
import { Carousel } from "react-bootstrap";
import { Rotate, Slide, Zoom } from "react-awesome-reveal";

// IMPORT IMAGES - LOCAL ASSETS
import logo from "./../../assets/logo/logo.png";
import Infrastructure from "./../../assets/carousel/infrastructure.png";
import WebDesignDevelopment from "./../../assets/carousel/web-design-development.png";
import CctvAccessControl from "./../../assets/carousel/cctv-access-control.png";
import SocialMedia from "./../../assets/carousel/social-media.png";
import GraphicDesign from "./../../assets/carousel/graphic-design.png";
import Amc from "./../../assets/carousel/amc.png";

function MainCarousel() {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <Carousel fade slide controls={false} pause={false} className="__carousel">
      <Carousel.Item>
        <div className="container __container py-5">
          <div className="row __row">
            <div className="col-12 __title">
              <Slide direction="down">
                <h3 data-aos="fade-up">Welcome to</h3>
              </Slide>
              <Slide direction="up">
                <Zoom>
                  <img
                    data-aos="zoom-in"
                    src={logo}
                    className="img-fluid"
                    style={{ width: "500px" }}
                    alt="IT 4 Supports"
                  />
                  <div className="__title__line"></div>
                </Zoom>
              </Slide>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container __container py-5">
          <div className="row __row">
            <div className="col-6 __title __title__start">
              <Slide direction="right" delay={1000}>
                <div data-aos="fade">
                  <h1>Infrastructure Management Services</h1>
                  <div className="__title__line"></div>
                  <h5>
                    |<span> IT Server </span>|<span> Network </span>|
                    <span> Database </span>|
                  </h5>
                </div>
              </Slide>
            </div>

            <div className="col-6">
              <Rotate delay={1000}>
                <div className="__title__img">
                  <img src={Infrastructure} alt="" />
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container __container py-5">
          <div className="row __row">
            <div className="col-6">
              <Rotate delay={1000}>
                <div className="__title__img">
                  <img src={WebDesignDevelopment} alt="" />
                </div>
              </Rotate>
            </div>

            <div className="col-6 __title __title__end">
              <Slide direction="left" delay={1000}>
                <div data-aos="fade">
                  <h1>Web Design and Development</h1>
                  <div className="__title__line"></div>
                  <h5>
                    |<span> Website </span>|<span> App </span>|
                    <span> Software </span>|
                  </h5>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container __container py-5">
          <div className="row __row">
            <div className="col-6 __title __title__start">
              <Slide direction="right" delay={1000}>
                <div data-aos="fade">
                  <h1>Security System</h1>
                  <div className="__title__line"></div>
                  <h5>
                    |<span> CCTV </span>|<span> Access </span>|
                    <span> ATTENDENCE </span>|
                  </h5>
                </div>
              </Slide>
            </div>

            <div className="col-6">
              <Rotate delay={1000}>
                <div className="__title__img">
                  <img src={CctvAccessControl} alt="" />
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container __container py-5">
          <div className="row __row">
            <div className="col-6">
              <Rotate delay={1000}>
                <div className="__title__img">
                  <img src={SocialMedia} alt="" />
                </div>
              </Rotate>
            </div>

            <div className="col-6 __title __title__end">
              <Slide direction="left" delay={1000}>
                <div data-aos="fade">
                  <h1>Digital Marketing</h1>
                  <div className="__title__line"></div>
                  <h5>
                    |<span> SEO </span>|<span> Social Media </span>|
                  </h5>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container __container py-5">
          <div className="row __row">
            <div className="col-6 __title __title__start">
              <Slide direction="right" delay={1000}>
                <div data-aos="fade">
                  <h1>Graphic Design</h1>
                  <div className="__title__line"></div>
                  <h5>
                    |<span> Logo </span>|<span> Brochure </span>|
                  </h5>
                </div>
              </Slide>
            </div>

            <div className="col-6">
              <Rotate delay={1000}>
                <div className="__title__img">
                  <img src={GraphicDesign} alt="" />
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container __container py-5">
          <div className="row __row">
            <div className="col-6">
              <Rotate delay={1000}>
                <div className="__title__img">
                  <img src={Amc} alt="" />
                </div>
              </Rotate>
            </div>

            <div className="col-6 __title __title__end">
              <Slide direction="left" delay={1000}>
                <div data-aos="fade">
                  <h1>Annual Maintence Contract</h1>
                  <div className="__title__line"></div>
                  <h5>
                    |<span> Extended Equipment Life </span>|
                  </h5>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
