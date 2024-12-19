import React, { Fragment } from "react";

import "./index.css";
import Header from "./components/Header";

const Devices = () => {
  document.body.className = "devices";

  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

export default Devices;
