import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import root stylesheet for core elements
import "./index.css";

// Template component for layout (navbar, sidebar, etc.)
import Layout from "./App";

// Page components
import Home from "./pages/Home";
import Devices from "./pages/Devices";
import Test from "./pages/Test";

// Place routing at root level of the application to have one location to manage
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes key={Date.now()}>
        <Route path="/" element={<Layout />}>
          {/* These routes use a template component that include header, footer, etc. */}
          <Route index element={<Home />} />
          <Route path="devices" element={<Devices />} />
        </Route>
        {/* These routes do not have the header and footer template  */}
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
