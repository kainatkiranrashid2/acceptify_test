import React, { Fragment, Suspense } from "react";
const Hero = React.lazy(() => import("./components/Hero"));
const PanCakeClaim = React.lazy(() => import("./components/PanCakeClaim"));
const IndustriesSection = React.lazy(() =>
  import("./components/IndustriesSection")
);
const BeautifulBranding = React.lazy(() =>
  import("./components/BeautifulBranding")
);
const AcceptWristbands = React.lazy(() =>
  import("./components/AcceptWristbands")
);
const BYOP = React.lazy(() => import("./components/BYOP"));
const MoreFeatures = React.lazy(() => import("./components/MoreFeatures"));
const OurCustomers = React.lazy(() => import("./components/OurCustomers"));

import "./index.css";

const Home = () => {
  document.body.className = "home";

  // const LoadingFallback = () => (
  //   <div className="flex justify-center items-center bg-white dark:bg-[#06142F] h-[100vh]">
  //     <img
  //       src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
  //       className="h-10 block dark:hidden"
  //       alt="logo"
  //     />
  //     <img
  //       src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
  //       className="bg-transparent h-10 hidden dark:block"
  //       alt="acceptify_logo"
  //       loading="lazy"
  //     />
  //   </div>
  // );

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
