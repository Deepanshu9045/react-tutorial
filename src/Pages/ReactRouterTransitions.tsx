import React, { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* ------------------------------------------------------------------ */
/* Pages */
/* ------------------------------------------------------------------ */

function Home() {
  return <div>🏠 Welcome to the Home Page</div>;
}

function About() {
  return <div>ℹ️ Learn more About us here</div>;
}

function Contact() {
  return <div>📞 Contact us anytime</div>;
}

/* ------------------------------------------------------------------ */
/* Fake Router */
/* ------------------------------------------------------------------ */

function FakeRoutes({ route }: { route: string }) {
  switch (route) {
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

/* ------------------------------------------------------------------ */
/* Main Component */
/* ------------------------------------------------------------------ */

function ReactRouterTransitions() {
  const [route, setRoute] = useState("/");

  // IMPORTANT → required for React 18+
  const nodeRef = useRef<HTMLDivElement>(null);

  const examples = [
    {
      title: "1. Navigation Concept",
      description:
        "In real apps Link updates the URL. Here we change state so page does not redirect.",
      code: `setRoute("/about");`,
      output: (
        <div>
          <Nav setRoute={setRoute} />

          <div style={{ marginTop: 20 }}>
            <FakeRoutes route={route} />
          </div>
        </div>
      ),
    },

    {
      title: "2. Transition Concept",
      description:
        "We animate component change using the same mechanism real routers use.",
      code: `key={route}`,
      output: (
        <div>
          <Nav setRoute={setRoute} />

          <div style={{ marginTop: 20, minHeight: 40 }}>
            <TransitionGroup component={null}>
              <CSSTransition
                key={route}
                timeout={300}
                classNames="fade"
                nodeRef={nodeRef}
                unmountOnExit
              >
                <div ref={nodeRef}>
                  <FakeRoutes route={route} />
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React Router & Transition Concepts</h1>

      <p>
        This tutorial demonstrates how navigation and page animations work
        internally without changing the browser URL.
      </p>

      {examples.map((item, index) => (
        <section key={index} style={{ marginTop: 40 }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <pre style={codeStyle}>
            <code>{item.code}</code>
          </pre>

          <strong>Live Output:</strong>
          <div style={outputStyle}>{item.output}</div>
        </section>
      ))}

      {/* Animation */}
      <style>
        {`
        .fade-enter {
          opacity: 0;
          transform: translateY(6px);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 300ms ease;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 200ms ease;
        }
      `}
      </style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation */
/* ------------------------------------------------------------------ */

function Nav({ setRoute }: { setRoute: (r: string) => void }) {
  return (
    <nav style={{ display: "flex", gap: 10 }}>
      <button onClick={() => setRoute("/")}>Home</button>
      <button onClick={() => setRoute("/about")}>About</button>
      <button onClick={() => setRoute("/contact")}>Contact</button>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Styles */
/* ------------------------------------------------------------------ */

const codeStyle: React.CSSProperties = {
  background: "#1e1e1e",
  color: "#d4d4d4",
  padding: 16,
  borderRadius: 8,
  maxWidth: 600,
};

const outputStyle: React.CSSProperties = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 600,
};

export default ReactRouterTransitions;
