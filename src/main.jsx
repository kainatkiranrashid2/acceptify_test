import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import root stylesheet for core elements
import "./index.css";

// Template component for layout (navbar, sidebar, etc.)
import Layout from "./App";

// Page components
const Home = React.lazy(() => import("./pages/Home"));

import Devices from "./pages/Devices";
import Test from "./pages/Test";
import Developers from "./pages/Developers";

const PageLoader = () => (
  <div className="flex justify-center items-center bg-white dark:bg-[#06142F] h-[100vh]">
    <img
      src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812836/components/acceptifylogo_black.png"
      className="h-10 block dark:hidden"
      alt="logo"
    />
    <img
      src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733812935/components/acceptifylogo_white.png"
      className="bg-transparent h-10 hidden dark:block"
      alt="acceptify_logo"
      loading="lazy"
    />
  </div>
);

// Place routing at root level of the application to have one location to manage
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes key={Date.now()}>
          <Route path="/" element={<Layout />}>
            {/* These routes use a template component that include header, footer, etc. */}
            <Route index element={<Home />} />
            <Route path="devices" element={<Devices />} />
            <Route path="developers" element={<Developers />} />
          </Route>
          {/* These routes do not have the header and footer template  */}
          <Route path="test" element={<Test />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
