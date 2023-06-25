// IMPORT PACKAGES
import React from "react";

// IMPORT COMPONENTS
import DigitalMarketingLabel from "../../components/Label/ServicesLabel/DigitalMarketingLabel";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Services.scss";

function DigitalMarketing() {
  return (
    <>
      <MetaData title={"NO: 1 DIGITAL MARKETING COMPANY IN INDIA AND UAE"} />

      <div className="__service">
        <div className="__servicesLabel">
          <DigitalMarketingLabel />
        </div>

        <div className="__content container py-5">
          <div className="pb-5">
            <h2>SEO/SEM</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              Creating a website in not enough. Once your website is ready you
              need to promote it. Traditional ways of promoting websites was
              through word of mouth and paper advertising. But now everything is
              done through the Internet.
            </p>

            <p>
              This is where SEO (Search Engine Optimization), SEM (Search Engine
              Marketing) comes into picture.
            </p>

            <p>
              Using these methods you can improve the visibility of your website
              to your online audience. At IT 4 Supports we will make sure that
              your website is made visible to the search engines using best
              practice SEO tactics.
            </p>
          </p>

          <div className="py-5">
            <h2>Social Media Marketing (SMM)</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              Social media marketing (SMM) is a form of Internet marketing that
              utilizes social networking websites as a marketing tool. The goal
              of SMM is to produce content that users will share with their
              social network to help a company increase brand exposure and
              broaden customer reach.
            </p>

            <p>
              One of the key components of SMM is social media optimization
              (SMO). Like search engine optimization (SEO), SMO is a strategy
              for drawing new and unique visitors to a website. SMO can be done
              two ways: adding social media links to content, such as RSS feeds
              and sharing buttons — or promoting activity through social media
              by updating statuses or tweets, or blog posts.
            </p>

            <p>
              IT 4 Supports help your business grow brand awareness,
              relationships, and website traffic.
            </p>
          </p>

          <div className="py-5">
            <h2>SMS / Email Marketing</h2>
          </div>

          <p className="__bg px-2 py-5 mb-5">
            <p>
              SMS marketing - Use of text messages to reach your target
              audience. 90% of texts are read within 4-6 minutes of delivery.
            </p>

            <p>
              Email marketing - Use of email to reach your target audience.
              Email remains one of the top forms of communication.
            </p>

            <p>SMS Marketing + Email Marketing = Increased Revenue</p>

            <p>
              It's a smartphone world. Both email and texts are checked on
              smartphones. Both SMS marketing and email marketing are forms of
              two-way communication. SMS and email marketing can support one
              another.
            </p>

            <p>
              IT 4 Supports will help you in increasing your business revenue
              using SMS and email marketing.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default DigitalMarketing;
