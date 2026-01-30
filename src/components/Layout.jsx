import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "../Pages/Dashboard";
import HelloWorld from "../Pages/HelloWorld";
import Page2 from "../Pages/Page2";

const Layout = () => {

  // Load saved page OR default dashboard
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || "dashboard";
  });

  // Save page whenever it changes
  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "HelloWorld":
        return <HelloWorld />;
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
