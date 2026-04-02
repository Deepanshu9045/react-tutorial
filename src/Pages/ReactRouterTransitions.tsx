import React, { useRef, useState, useTransition } from "react";
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

  // React 18 transition hook
  const [isPending, startTransition] = useTransition();

  // required for react-transition-group with React 18+
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleRouteChange = (nextRoute: string) => {
    startTransition(() => {
      setRoute(nextRoute);
    });
  };

  const examples = [
    {
      title: "1. Navigation Concept",
      description:
        "In real apps Link updates the URL. Here we change state so page does not redirect.",
      code: `setRoute("/about");`,
      output: (
        <div>
          <Nav onNavigate={handleRouteChange} />

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
          <Nav onNavigate={handleRouteChange} />

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

    {
      title: "3. useTransition Concept",
      description:
        "useTransition lets React treat navigation as a low-priority update so urgent UI stays responsive.",
      code: `startTransition(() => {
  setRoute("/about");
});`,
      output: (
        <div>
          <Nav onNavigate={handleRouteChange} />

          <div style={{ marginTop: 16 }}>
            <strong>Status:</strong>{" "}
            {isPending ? "Loading next page..." : "Page ready"}
          </div>

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

    {
      title: "4. When to Use Transitions",
      description:
        "Use transitions when switching pages, filtering big lists, searching, or rendering expensive UI. Avoid them for instant field updates like typing in an input.",
      code: `Good use cases:
- route changes
- tab changes
- large list filtering
- search results
- charts / heavy UI rendering

Avoid:
- controlled input typing
- checkbox toggle
- urgent error display`,
      output: (
        <div>
          <ul style={{ lineHeight: 1.8, paddingLeft: 20 }}>
            <li>✅ Route changes</li>
            <li>✅ Tab changes</li>
            <li>✅ Search results</li>
            <li>✅ Large filtered lists</li>
            <li>✅ Heavy components</li>
            <li>❌ Typing in inputs</li>
            <li>❌ Small instant UI updates</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React Router & Transition Concepts</h1>

      <p>
        This tutorial demonstrates navigation, animation, and how{" "}
        <code>useTransition</code> helps keep the UI responsive during route
        changes.
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

function Nav({ onNavigate }: { onNavigate: (r: string) => void }) {
  return (
    <nav style={{ display: "flex", gap: 10 }}>
      <button onClick={() => onNavigate("/")}>Home</button>
      <button onClick={() => onNavigate("/about")}>About</button>
      <button onClick={() => onNavigate("/contact")}>Contact</button>
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
  maxWidth: 700,
  whiteSpace: "pre-wrap",
};

const outputStyle: React.CSSProperties = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 700,
};

export default ReactRouterTransitions;