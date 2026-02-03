import React from "react";

function ReactDestructuringProps() {
  const examples = [
    {
      title: "1. What is Props Destructuring?",
      description:
        "Props destructuring allows you to extract values from props directly, making code cleaner and more readable.",
      code: `function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

// With Destructuring
function Welcome({ name }) {
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <Welcome name="Deepanshu" />;
}`,
      output: <h2>Hello, Deepanshu</h2>,
    },
    {
      title: "2. Destructuring Props in Function Parameters",
      description:
        "The most common way is to destructure props directly in the function parameter.",
      code: `function User({ name, age }) {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}

function App() {
  return <User name="Deepanshu" age={22} />;
}`,
      output: <p>Name: Deepanshu, Age: 22</p>,
    },
    {
      title: "3. Destructuring Inside the Function Body",
      description:
        "Props can also be destructured inside the component body.",
      code: `function Profile(props) {
  const { name, role } = props;

  return <p>{name} is a {role}</p>;
}

function App() {
  return <Profile name="Deepanshu" role="Frontend Developer" />;
}`,
      output: <p>Deepanshu is a Frontend Developer</p>,
    },
    {
      title: "4. Destructuring Props in Class Components",
      description:
        "In class components, props can be destructured from this.props.",
      code: `class Greeting extends React.Component {
  render() {
    const { name } = this.props;
    return <h3>Welcome, {name}</h3>;
  }
}

class App extends React.Component {
  render() {
    return <Greeting name="React Learner" />;
  }
}`,
      output: <h3>Welcome, React Learner</h3>,
    },
    {
      title: "5. Destructuring with Default Values",
      description:
        "You can set default values while destructuring props.",
      code: `function Button({ text = "Click Me" }) {
  return <button>{text}</button>;
}

function App() {
  return <Button />;
}`,
      output: <button>Click Me</button>,
    },
    {
      title: "6. Destructuring props.children",
      description:
        "props.children can also be destructured for cleaner syntax.",
      code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h4>Card Title</h4>
      <p>Card content goes here</p>
    </Card>
  );
}`,
      output: (
        <div style={{ border: "1px solid #ccc", padding: "8px" }}>
          <h4>Card Title</h4>
          <p>Card content goes here</p>
        </div>
      ),
    },
    {
      title: "7. Destructuring Nested Props",
      description:
        "You can destructure nested objects passed as props.",
      code: `function User({ profile: { name, email } }) {
  return (
    <p>
      Name: {name}, Email: {email}
    </p>
  );
}

function App() {
  return (
    <User profile={{ name: "Deepanshu", email: "deepanshu@email.com" }} />
  );
}`,
      output: <p>Name: Deepanshu, Email: deepanshu@email.com</p>,
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      {/* Page Heading */}
      <h1>React Destructuring Props</h1>
      <p>
        Destructuring props helps write cleaner, more readable React components
        by extracting values directly from props.
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

export default ReactDestructuringProps;