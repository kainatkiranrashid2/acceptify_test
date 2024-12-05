import React, { Fragment } from "react";
import Hero from "./components/Hero";
import PanCakeClaim from "./components/PanCakeClaim";
import FeatureGrid from "./components/FeatureGrid";
import SmartTransaction from "./components/SmartTransaction";
import IndustriesSection from "./components/IndustriesSection";
import CTASection from "./components/CTASection";

import "./index.css";
import BeautifulBranding from "./components/BeautifulBranding";
import AcceptWristbands from "./components/AcceptWristbands";

const Home = () => {
  document.body.className = "home";

  return (
    <Fragment>
      <Hero />
      <PanCakeClaim />
      <BeautifulBranding />
      <AcceptWristbands />
      {/* <SmartTransaction /> */}
      <IndustriesSection />
      <CTASection />
    </Fragment>
  );
};

export default Home;
