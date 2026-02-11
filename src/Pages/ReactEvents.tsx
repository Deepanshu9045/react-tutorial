import React, { useState } from "react";

function ReactEvents() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [hover, setHover] = useState(false);

  const examples = [
    {
      title: "1. onClick Event",
      description:
        "onClick is triggered when a user clicks on an element like a button.",
      code: `function App() {
  const handleClick = () => alert("Button Clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}`,
      output: (
        <button onClick={() => alert("Button Clicked!")}>Click Me</button>
      ),
    },
    {
      title: "2. Updating State with Click",
      description:
        "Events are often used to update state values in React.",
      code: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increase
</button>;`,
      output: (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      ),
    },
    {
      title: "3. onChange Event",
      description:
        "onChange is used mostly with input fields to track user typing.",
      code: `const [text, setText] = useState("");

<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>;`,
      output: (
        <div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something"
          />
          <p>You typed: {text}</p>
        </div>
      ),
    },
    {
      title: "4. onMouseEnter & onMouseLeave",
      description:
        "These events run when the mouse enters or leaves an element.",
      code: `const [hover, setHover] = useState(false);

<div
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  Hover me
</div>;`,
      output: (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: "10px",
            width: "120px",
            textAlign: "center",
            background: hover ? "orange" : "lightgray",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Hover me
        </div>
      ),
    },
    {
      title: "5. onSubmit Event",
      description:
        "onSubmit is used in forms. It usually prevents page refresh.",
      code: `function handleSubmit(e) {
  e.preventDefault();
  alert("Form Submitted");
}

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>;`,
      output: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form Submitted");
          }}
        >
          <button type="submit">Submit</button>
        </form>
      ),
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      <h1>React Events Introduction</h1>
      <p>
        React events allow you to respond to user actions like clicks, typing,
        hovering, and form submission.
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

export default ReactEvents;