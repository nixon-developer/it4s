// IMPORT PACKAGES
import React from "react";

// IMPORT COMPONENTS
import WebDDLabel from "./../../components/Label/ServicesLabel/WebDDLabel";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Services.scss";

function WebDD() {
  return (
    <>
      <MetaData
        title={
          "NO: 1 WEB DESIGNING AND WEB DEVELOPMENT COMPANY IN INDIA AND UAE"
        }
      />

      <div className="__service">
        <div className="__servicesLabel">
          <WebDDLabel />
        </div>

        <div className="__content container py-5">
          <div className="pb-5">
            <h2>Web Design</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              Keeping in tune with the today's web trends, our technical experts
              are quite good in incorporating responsive element which allows
              the website to accommodate and provide an optimal experience to
              various screen sizes, thereby enhancing user experience..
            </p>

            <p>
              Our team has always been successful in creating high end, user
              friendly, custom- built websites and e-commerce sites, which is
              known for its cutting edge design and affordable cost. By
              combining creative ideas with advance tools, we help you build a
              viable and significant relationship with your customers by
              engaging them with your brand using the social media platforms.
            </p>

            <p>
              We never consider designing website as a part of our job; for us
              it is one of a kind of art that could create impact in the minds
              of target audience. And it's a matter of pride that we could
              create an impression on our clients through our aesthetically
              pleasing websites and their technical excellence.
            </p>
          </p>

          <div className="py-5">
            <h2>Web Development</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              Our prime objective is not just developing an alluring website,
              but a market-oriented one, to generate more prospects for the
              clients, generate sale leads by improving website's marketing
              performance, and providing a satisfying user experience.
            </p>

            <p>
              Technically, the whole process of Web development involves roughly
              seven phases: Planning and Analysis, Design and Development,
              Content Writing, Coding, Testing, SEO, Maintenance and updating.
              And throughout the steps, we follow the best practices for design
              and usability to ensure our clients, satisfaction and increased
              ROI.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default WebDD;
