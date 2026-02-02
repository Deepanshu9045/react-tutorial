import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "../Pages/Dashboard";
import HelloReact from "../Pages/HelloReact";
import JSXIntro from "../Pages/JSXIntro";
import JSXExpressions from "../Pages/JSXExpressions";
import JSXAttributes from "../Pages/JSXAttributes";
import JSXIfStatements from "../Pages/JSXIfStatements";
import ReactComponents from "../Pages/ReactComponents";

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
      case "HelloReact":
        return <HelloReact />;
      case "JSXIntro":
        return <JSXIntro />;
      case "JSXExpressions":
        return <JSXExpressions />;
      case "JSXAttributes":
        return <JSXAttributes />;
      case "JSXIfStatements":
        return <JSXIfStatements />;
      case "ReactComponents":
        return <ReactComponents />;
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
