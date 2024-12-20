import { Fragment } from "react";
import Hero from "./components/Hero";
import PanCakeClaim from "./components/PanCakeClaim";
import IndustriesSection from "./components/IndustriesSection";
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
      <IndustriesSection />
      <OurCustomers />
    </Fragment>
  );
};

export default Home;
