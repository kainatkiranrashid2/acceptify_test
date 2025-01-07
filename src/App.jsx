import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
const Layout = () => {
  // This page only contains components that should be present across all pages
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
