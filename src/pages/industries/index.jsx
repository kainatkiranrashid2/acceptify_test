import React, { Fragment } from "react";
const Header = React.lazy(() => import("./components/Header"));

import "./index.css";

const Industries = () => {
  document.body.className = "industries";

  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

export default Industries;
