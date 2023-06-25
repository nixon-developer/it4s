// IMPORT PACKAGES
import React from "react";

// IMPORT COMPONENTS
import MainCarousel from "../../components/Carousel/MainCarousel";
import LabelTop from "../../components/Label/LabelTop";
import ServicesLabel from "./../../components/Label/ServicesLabel/ServicesLabel";
import WhyUsLabel from "../../components/Label/WhyUsLabel";

// IMPORT SHARED COMPONENTS
import MetaData from "./../../shared/MetaData";

// IMPORT SCSS
import "./Home.scss";

function Home() {
  return (
    <>
      <MetaData
        title={"LEADING MANAGED IT SERVICE PROVIDER IN INDIA AND UAE"}
      />

      <div id="__main__carousel">
        <MainCarousel />
      </div>

      <div id="__label__top">
        <LabelTop />
      </div>

      <div id="__label__services">
        <ServicesLabel />
      </div>

      <div id="__label__whyUs">
        <WhyUsLabel />
      </div>
    </>
  );
}

export default Home;
