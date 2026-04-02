import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "../Pages/Dashboard";
import ReactIntroduction from "../Pages/ReactIntroduction";
import SPA from "../Pages/SPA";
import SEO from "../Pages/SEO";
import JSXIntro from "../Pages/JSXIntro";
import JSXExpressions from "../Pages/JSXExpressions";
import JSXAttributes from "../Pages/JSXAttributes";
import JSXIfStatements from "../Pages/JSXIfStatements";
import ReactComponents from "../Pages/ReactComponents";
import ReactClassComponents from "../Pages/ReactClassComponents";
import ReactProps from "../Pages/ReactProps";
import ReactDestructuringProps from "../Pages/ReactDestructuringProps";
import ReactChildrenAndEvents from "../Pages/ReactChildrenAndEvents";
import ReactEvents from "../Pages/ReactEvents";
import ReactConditionalRendering from "../Pages/ReactConditionalRendering";
import ReactForm from "../Pages/ReactForm";
import ReactFormSElements from "../Pages/ReactFormElements";
import ReactLists from "../Pages/ReactLists";
import ReactPortalSuspense from "../Pages/ReactPortalSuspense";
import ReactRouterTransitions from "../Pages/ReactRouterTransitions";

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
      case "Introduction":
        return <ReactIntroduction />
      case "SPA":
        return <SPA />;
      case "SEO":
        return <SEO />;
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
      case "ReactClassComponents":
        return <ReactClassComponents />;
      case "ReactProps":
        return <ReactProps />;
      case "ReactDestructuringProps":
        return <ReactDestructuringProps />;
      case "ReactChildrenAndEvents":
        return <ReactChildrenAndEvents/>;
      case "ReactEvents":
         return <ReactEvents/>
      case "ReactConditionalRendering":
        return <ReactConditionalRendering/>
      case "ReactLists":
        return <ReactLists/>
      case "ReactForm":
        return <ReactForm/>
      case "ReactFormSElements":
        return <ReactFormSElements/>
      case "ReactPortalSuspense":
        return <ReactPortalSuspense/>
      case "ReactRouterTransitions":
        return <ReactRouterTransitions/>
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="app-main">
        <div className="app-main__glow app-main__glow--one" />
        <div className="app-main__glow app-main__glow--two" />
        <div className="app-content">{renderPage()}</div>
      </main>
    </div>
  );
};

export default Layout;
