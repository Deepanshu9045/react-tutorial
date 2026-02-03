import React from "react";

function ReactProps() {
  const examples = [
    {
      title: "1. What are Props in React?",
      description:
        "Props (short for properties) are used to pass data from one component to another. Props are read-only and help make components reusable.",
      code: `function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

function App() {
  return <Welcome name="Deepanshu" />;
}`,
      output: <h2>Hello, Deepanshu</h2>,
    },
    {
      title: "2. Passing Multiple Props",
      description:
        "You can pass multiple values to a component using props.",
      code: `function User(props) {
  return (
    <p>
      Name: {props.name}, Age: {props.age}
    </p>
  );
}

function App() {
  return <User name="Deepanshu" age={22} />;
}`,
      output: <p>Name: Deepanshu, Age: 22</p>,
    },
    {
      title: "3. Props in Class Components",
      description:
        "In class components, props are accessed using this.props.",
      code: `class Greeting extends React.Component {
  render() {
    return <h3>Welcome, {this.props.name}</h3>;
  }
}

class App extends React.Component {
  render() {
    return <Greeting name="React Developer" />;
  }
}`,
      output: <h3>Welcome, React Developer</h3>,
    },
    {
      title: "4. Props with Children",
      description:
        "props.children allows you to pass components or elements between opening and closing tags.",
      code: `function Card(props) {
  return <div className="card">{props.children}</div>;
}

function App() {
  return (
    <Card>
      <h4>Title</h4>
      <p>This is card content</p>
    </Card>
  );
}`,
      output: (
        <div style={{ border: "1px solid #ccc", padding: "8px" }}>
          <h4>Title</h4>
          <p>This is card content</p>
        </div>
      ),
    },
    {
      title: "5. Props Destructuring",
      description:
        "Destructuring props makes the code cleaner and easier to read.",
      code: `function Profile({ name, role }) {
  return <p>{name} is a {role}</p>;
}

function App() {
  return <Profile name="Deepanshu" role="Frontend Developer" />;
}`,
      output: <p>Deepanshu is a Frontend Developer</p>,
    },
    {
      title: "6. Default Props",
      description:
        "Default props provide fallback values when props are not passed.",
      code: `function Button({ text = "Click Me" }) {
  return <button>{text}</button>;
}

function App() {
  return <Button />;
}`,
      output: <button>Click Me</button>,
    },
    {
      title: "7. Props are Read-Only",
      description:
        "Props cannot be modified inside a component. They are immutable.",
      code: `function Message(props) {
  // ❌ props.text = "Hi"; (Not Allowed)
  return <p>{props.text}</p>;
}

function App() {
  return <Message text="Hello World" />;
}`,
      output: <p>Hello World</p>,
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      {/* Page Heading */}
      <h1>React Props</h1>
      <p>
        Props are used to pass data from parent components to child components.
        They make components dynamic and reusable.
      </p>

      {/* Examples */}
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

          {/* Code Box */}
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

export default ReactProps;
