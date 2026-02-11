import React, { useState } from "react";

function ReactConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(true);

  const examples = [
    {
      title: "1. if / else Rendering",
      description:
        "You can use normal JavaScript if/else logic to decide what to display.",
      code: `function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  } else {
    return <h2>Please login.</h2>;
  }
}`,
      output: (
        <div>
          {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please login.</h2>}
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Toggle Login
          </button>
        </div>
      ),
    },
    {
      title: "2. Ternary Operator",
      description:
        "A short way of writing conditions directly inside JSX.",
      code: `{isLoggedIn ? <h2>Dashboard</h2> : <h2>Login Page</h2>}`,
      output: (
        <div>
          <h2>{isLoggedIn ? "Dashboard" : "Login Page"}</h2>
        </div>
      ),
    },
    {
      title: "3. && Operator",
      description:
        "If the condition is true, the element will show. If false, nothing renders.",
      code: `{isLoggedIn && <p>You have new notifications</p>}`,
      output: (
        <div>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Toggle Notifications
          </button>
          {isLoggedIn && <p>You have new notifications</p>}
        </div>
      ),
    },
    {
      title: "4. Show / Hide Component",
      description:
        "You can show or hide entire components using state.",
      code: `const [show, setShow] = useState(true);

{show && <h2>This is visible</h2>}`,
      output: (
        <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
          {show && <h2>This is visible</h2>}
        </div>
      ),
    },
    {
      title: "5. Multiple Conditions",
      description:
        "You can check multiple values before rendering.",
      code: `const role = "admin";

{role === "admin" ? <p>Admin Panel</p> : <p>User Panel</p>}`,
      output: (
        <div>
          <p>{isLoggedIn ? "Admin Panel" : "User Panel"}</p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      <h1>React Conditional Rendering</h1>
      <p>
        Conditional rendering means showing different UI depending on
        certain conditions like login status, roles, or actions.
      </p>

      {examples.map((item, index) => (
        <div
          key={index}
          style={{
            marginTop: "40px",
            paddingBottom: "24px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          {/* Code */}
          <pre
            style={{
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
              padding: "16px",
              borderRadius: "8px",
              maxWidth: "600px",
              overflowX: "auto",
              marginTop: "12px",
            }}
          >
            <code>{item.code}</code>
          </pre>

          {/* Output */}
          <div style={{ marginTop: "16px" }}>
            <strong>Output:</strong>
            <div
              style={{
                marginTop: "8px",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                maxWidth: "600px",
              }}
            >
              {item.output}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReactConditionalRendering;