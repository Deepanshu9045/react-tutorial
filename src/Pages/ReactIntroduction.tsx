import React from "react";

/* ------------------------------------------------------------------ */
/* Main Component */
/* ------------------------------------------------------------------ */

function ReactIntroductionPage() {
  const examples = [
    {
      title: "1. What is React?",
      description:
        "React is a JavaScript library used to build user interfaces with reusable components.",
      code: `function Welcome() {
  return <h1>Hello React</h1>;
}`,
      output: (
        <div>
          <h3 style={{ marginTop: 0 }}>Simple Example</h3>
          <div>Hello React</div>
        </div>
      ),
    },

    {
      title: "2. Key Strengths of React",
      description:
        "React is popular because it uses reusable components, one-way data flow, state-based UI updates, and a strong ecosystem.",
      code: `Key strengths:
- Component-based architecture
- Reusable UI
- Fast updates with virtual DOM concept
- State and props system
- Large ecosystem and community`,
      output: (
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>Reusable components</li>
          <li>Easy UI breakdown</li>
          <li>State-driven updates</li>
          <li>Clean data flow</li>
          <li>Huge ecosystem</li>
        </ul>
      ),
    },

    {
      title: "3. Basic React Structure",
      description:
        "A React app is usually made of components, props, state, events, and rendering logic.",
      code: `App
 ┣ Header
 ┣ MainContent
 ┗ Footer`,
      output: (
        <div style={{ lineHeight: 1.8 }}>
          <div>App</div>
          <div style={{ paddingLeft: 20 }}>┣ Header</div>
          <div style={{ paddingLeft: 20 }}>┣ MainContent</div>
          <div style={{ paddingLeft: 20 }}>┗ Footer</div>
        </div>
      ),
    },

    {
      title: "4. Normal React App",
      description:
        "A traditional React app usually means a simple React setup without extra framework features. Today, React docs recommend using a build tool such as Vite instead of old CRA-style setup.",
      code: `Basic idea:
- install Node.js
- create project
- add React + ReactDOM
- run development server

Typical files:
src/
  App.jsx
  main.jsx
index.html`,
      output: (
        <div>
          <strong>Typical structure:</strong>
          <pre style={miniCodeStyle}>
{`src/
  App.jsx
  main.jsx
index.html`}
          </pre>
        </div>
      ),
    },

    {
      title: "5. Vite React App",
      description:
        "Vite is a modern frontend build tool. It gives faster startup, fast HMR, and a simpler developer experience for React apps.",
      code: `npm create vite@latest my-app
cd my-app
npm install
npm run dev`,
      output: (
        <div>
          <strong>Vite setup command:</strong>
          <pre style={miniCodeStyle}>
{`npm create vite@latest my-app
cd my-app
npm install
npm run dev`}
          </pre>
        </div>
      ),
    },

    {
      title: "6. Normal App vs Vite React App",
      description:
        "Both create React apps, but Vite is faster and is more commonly preferred for modern frontend development.",
      code: `Normal app:
- simple concept
- older style setup
- slower tooling in many cases

Vite app:
- faster dev server
- faster hot reload
- modern setup
- better developer experience`,
      output: (
        <div style={{ lineHeight: 1.9 }}>
          <div><strong>Normal App:</strong> basic setup idea</div>
          <div><strong>Vite App:</strong> modern and faster setup</div>
          <div><strong>Best choice now:</strong> Vite for most small/medium React apps</div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React Introduction</h1>

      <p>
        This page explains what React is, its key strengths, its basic structure,
        and two common ways to create a React application.
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
    </div>
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

const miniCodeStyle: React.CSSProperties = {
  background: "#f4f4f4",
  padding: 12,
  borderRadius: 6,
  marginTop: 10,
  whiteSpace: "pre-wrap",
};

const outputStyle: React.CSSProperties = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 700,
};

export default ReactIntroductionPage;