import { Fragment } from "react";

import "./index.css";
import Header from "./components/Header";
import DeveloperBenefits from "./components/DeveloperBenefits";

const Developers = () => {
  document.body.className = "devices";

  return (
    <Fragment>
      <Header />
      <DeveloperBenefits />
    </Fragment>
  );
};

export default Developers;
