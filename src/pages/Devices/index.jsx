import React, { Fragment } from "react";

import "./index.css";
import Header from "./components/Header";
import DevicesSection from "./components/DevicesSection";
import CTASection from "../Home/components/CTASection";

const Devices = () => {
  document.body.className = "devices";

  return (
    <Fragment>
      <Header />
      <DevicesSection />
      <CTASection />
    </Fragment>
  );
};

export default Devices;
