import React, { Fragment } from "react";
const Header = React.lazy(() => import("./components/Header"));
const IndustriesSection = React.lazy(() => import("./components/industries"));

import "./index.css";

const Industries = () => {
  document.body.className = "industries";

  return (
    <Fragment>
      <Header />
      <IndustriesSection />
    </Fragment>
  );
};

export default Industries;
