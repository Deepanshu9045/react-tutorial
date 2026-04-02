import React from "react";

/* ------------------------------------------------------------------ */
/* Main Component */
/* ------------------------------------------------------------------ */

function SPAPage() {
  const examples = [
    {
      title: "1. What is SPA?",
      description:
        "SPA stands for Single Page Application. In an SPA, the page does not fully reload when users move between sections. Instead, JavaScript updates only the needed UI parts.",
      code: `SPA = Single Page Application

Instead of loading a new HTML page every time,
React updates only the changed content.`,
      output: (
        <div>
          <strong>Example:</strong>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            When you click Home, About, or Contact in a React app, the browser
            often stays on the same page while only the content changes.
          </p>
        </div>
      ),
    },

    {
      title: "2. How SPA Works",
      description:
        "The browser loads one main page first. After that, React changes components dynamically based on route or state.",
      code: `User opens app
   ↓
index.html loads once
   ↓
React app starts
   ↓
User clicks navigation
   ↓
Only content updates, full page reload does not happen`,
      output: (
        <div style={{ lineHeight: 1.8 }}>
          <div>index.html loads once</div>
          <div>↓</div>
          <div>React starts</div>
          <div>↓</div>
          <div>User navigates</div>
          <div>↓</div>
          <div>Only UI updates</div>
        </div>
      ),
    },

    {
      title: "3. Key Features of SPA",
      description:
        "SPAs are fast and smooth because only the required part of the screen updates instead of loading a complete new page.",
      code: `Key features:
- One main page load
- Dynamic UI updates
- Fast navigation feeling
- Better app-like experience
- Usually uses client-side routing`,
      output: (
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>Single initial page load</li>
          <li>Fast page switching feel</li>
          <li>Dynamic rendering</li>
          <li>Reusable components</li>
          <li>Client-side routing</li>
        </ul>
      ),
    },

    {
      title: "4. SPA Structure",
      description:
        "A simple SPA usually has one root app and different pages or sections rendered conditionally.",
      code: `App
 ┣ Navbar
 ┣ Router / Route Logic
 ┃   ┣ Home
 ┃   ┣ About
 ┃   ┗ Contact
 ┗ Footer`,
      output: (
        <div style={{ lineHeight: 1.8 }}>
          <div>App</div>
          <div style={{ paddingLeft: 20 }}>┣ Navbar</div>
          <div style={{ paddingLeft: 20 }}>┣ Router / Route Logic</div>
          <div style={{ paddingLeft: 40 }}>┣ Home</div>
          <div style={{ paddingLeft: 40 }}>┣ About</div>
          <div style={{ paddingLeft: 40 }}>┗ Contact</div>
          <div style={{ paddingLeft: 20 }}>┗ Footer</div>
        </div>
      ),
    },

    {
      title: "5. SPA Example Concept",
      description:
        "This is a basic example where clicking buttons changes the visible content without reloading the browser page.",
      code: `const [page, setPage] = useState("home");

{page === "home" && <Home />}
{page === "about" && <About />}
{page === "contact" && <Contact />}`,
      output: (
        <div>
          <p style={{ margin: 0 }}>
            React checks state and renders only the selected section.
          </p>
        </div>
      ),
    },

    {
      title: "6. SPA vs Traditional Multi Page App",
      description:
        "In a traditional multi-page app, every route usually loads a new HTML page from the server. In an SPA, content changes inside the same app.",
      code: `Traditional app:
- new request
- new HTML page load
- full reload

SPA:
- one initial load
- route changes inside app
- no full reload`,
      output: (
        <div style={{ lineHeight: 1.9 }}>
          <div><strong>Traditional App:</strong> full page reload</div>
          <div><strong>SPA:</strong> only content updates</div>
        </div>
      ),
    },

    {
      title: "7. Advantages of SPA",
      description:
        "SPA is commonly used because it gives a smoother user experience and feels closer to a mobile or desktop app.",
      code: `Advantages:
- Faster navigation after first load
- Better user experience
- Smooth transitions
- Easier reusable UI with components`,
      output: (
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>Fast navigation</li>
          <li>Smooth UI experience</li>
          <li>Reusable components</li>
          <li>App-like feeling</li>
        </ul>
      ),
    },

    {
      title: "8. Limitations of SPA",
      description:
        "SPAs are powerful, but they can have challenges such as SEO handling, initial loading time, and extra client-side JavaScript.",
      code: `Limitations:
- First load can be heavier
- SEO may need extra setup
- Depends more on JavaScript
- Routing setup is needed`,
      output: (
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>Heavier first load sometimes</li>
          <li>SEO needs proper handling</li>
          <li>More client-side logic</li>
          <li>Needs routing management</li>
        </ul>
      ),
    },

    {
      title: "9. When to Use SPA",
      description:
        "SPA is a good choice for dashboards, admin panels, portfolio apps, task managers, chat apps, and many interactive web apps.",
      code: `Good use cases:
- Admin dashboard
- CRM
- Portfolio
- Chat app
- Project management app`,
      output: (
        <div style={{ lineHeight: 1.9 }}>
          <div>✅ Dashboard</div>
          <div>✅ CRM</div>
          <div>✅ Portfolio</div>
          <div>✅ Chat app</div>
          <div>✅ Task manager</div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>Single Page Application (SPA)</h1>

      <p>
        This page explains what SPA is, how it works, its structure,
        advantages, limitations, and where it is commonly used.
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

const outputStyle: React.CSSProperties = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 700,
};

export default SPAPage;