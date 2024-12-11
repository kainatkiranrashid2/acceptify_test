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
import BYOP from "./components/BYOP";
import MoreFeatures from "./components/MoreFeatures";
import OurCustomers from "./components/OurCustomers";

const Home = () => {
  document.body.className = "home";

  return (
    <Fragment>
      <Hero />
      <PanCakeClaim />
      <BeautifulBranding />
      <AcceptWristbands />
      <BYOP />
      <MoreFeatures />
      {/* <SmartTransaction /> */}
      <IndustriesSection />
      <OurCustomers />
      {/* <CTASection /> */}
    </Fragment>
  );
};

export default Home;
