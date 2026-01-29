import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "../Pages/Dashboard";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";

const Layout = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "page1":
        return <Page1 />;
      case "page2":
        return <Page2 />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div style={{ flex: 1, padding: "20px" }}>
        {renderPage()}
      </div>
    </div>
  );
};

export default Layout;
