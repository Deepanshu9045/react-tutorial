import React, { useState } from "react";

function ReactChildrenAndEvents() {
  const examples = [
    {
      title: "1. What is props.children?",
      description:
        "props.children allows you to pass content between opening and closing component tags.",
      code: `function Wrapper({ children }) {
  return <div className="box">{children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h2>Hello Deepanshu</h2>
    </Wrapper>
  );
}`,
      output: (
        <div style={{ border: "1px solid #ccc", padding: "8px" }}>
          <h2>Hello Deepanshu</h2>
        </div>
      ),
    },

    {
  title: "2. Parent Passing Content to Children",
  description:
    "The Parent component sends JSX between the tags. Son and Daughter receive it using props.children.",
  code: `function Son(props) {
  return (
    <div style={{ background: "lightgreen" }}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const { brand, model } = props; // example of destructuring (optional)
  return (
    <div style={{ background: "lightblue" }}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>

      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>

      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}`,
  output: (
    <div>
      <h1>My two Children</h1>

      <div style={{ background: "lightgreen", padding: "8px", marginBottom: "8px" }}>
        <h2>Son</h2>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Son component
        </p>
      </div>

      <div style={{ background: "lightblue", padding: "8px" }}>
        <h2>Daughter</h2>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Daughter component
        </p>
      </div>
    </div>
  ),
},


    {
      title: "3. Multiple Elements using children",
      description:
        "You can pass multiple JSX elements inside props.children.",
      code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h4>Title</h4>
      <p>Description here</p>
    </Card>
  );
}`,
      output: (
        <div style={{ border: "1px solid #ccc", padding: "8px" }}>
          <h4>Title</h4>
          <p>Description here</p>
        </div>
      ),
    },
    {
      title: "4. Click Event (onClick)",
      description: "Events allow users to interact with your app.",
      code: `function Button() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}`,
      output: <button>Click Me</button>,
    },
    {
      title: "5. Passing Event Handler via Props",
      description:
        "Parent components can pass event functions to child components.",
      code: `function Child({ onPress }) {
  return <button onClick={onPress}>Press</button>;
}

function App() {
  const showMessage = () => alert("Hello!");

  return <Child onPress={showMessage} />;
}`,
      output: <button>Press</button>,
    },
    {
      title: "6. Input Change Event (onChange)",
      description:
        "onChange is used to track user input in real time.",
      code: `function InputExample() {
  const [text, setText] = useState("");

  return (
    <>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </>
  );
}`,
      output: (
        <>
          <input placeholder="Type something..." />
          <p>You typed: ...</p>
        </>
      ),
    },
    {
      title: "7. Submit Event (onSubmit)",
      description:
        "Forms use onSubmit to handle submission.",
      code: `function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`,
      output: <button>Submit</button>,
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      <h1>React Props Children & Events</h1>
      <p>
        Learn how to use <b>props.children</b> and handle{" "}
        <b>user events</b> like clicks, input, and form submissions.
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

export default ReactChildrenAndEvents;
