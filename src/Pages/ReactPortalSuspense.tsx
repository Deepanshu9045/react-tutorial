import React, { useState, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

/**
 * Lazy component for Suspense demo
 */
const LazyHello = lazy(
  () =>
    new Promise<{ default: React.FC }>((resolve) =>
      setTimeout(() => resolve({ default: () => <h3>Loaded Component 🎉</h3> }), 1500)
    )
);

function ReactPortalSuspense() {
  const [open, setOpen] = useState(false);
  const [showLazy, setShowLazy] = useState(false);

  const examples = [
    {
      title: "1. React Portal",
      description:
        "Portal lets you render children into a DOM node outside the parent hierarchy.",
      code: `ReactDOM.createPortal(<Modal />, document.body);`,
      output: (
        <div>
          <button onClick={() => setOpen(true)}>Open Modal</button>

          {open &&
            ReactDOM.createPortal(
              <div style={modalStyle}>
                <div style={modalContentStyle}>
                  <p>This is rendered using Portal</p>
                  <button onClick={() => setOpen(false)}>Close</button>
                </div>
              </div>,
              document.body
            )}
        </div>
      ),
    },

    {
      title: "2. Suspense + lazy",
      description:
        "Suspense shows fallback UI until lazy component finishes loading.",
      code: `<Suspense fallback={<p>Loading...</p>}>
  <LazyComponent />
</Suspense>`,
      output: (
        <div>
          <button onClick={() => setShowLazy(true)}>Load Component</button>

          {showLazy && (
            <Suspense fallback={<p>Loading...</p>}>
              <LazyHello />
            </Suspense>
          )}
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React Portals & Suspense</h1>

      {examples.map((item, index) => (
        <div key={index} style={{ marginTop: 40 }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <pre style={codeStyle}>
            <code>{item.code}</code>
          </pre>

          <strong>Output:</strong>
          <div style={outputStyle}>{item.output}</div>
        </div>
      ))}
    </div>
  );
}

const codeStyle: React.CSSProperties = {
  background: "#1e1e1e",
  color: "#d4d4d4",
  padding: 16,
  borderRadius: 8,
  maxWidth: 600,
  overflowX: "auto",
};

const outputStyle = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 600,
};

const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContentStyle: React.CSSProperties = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
};

export default ReactPortalSuspense;
