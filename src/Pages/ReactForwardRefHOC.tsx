import React, { useRef, useState } from "react";

const CustomInput = React.forwardRef<HTMLInputElement, { placeholder?: string }>(
  ({ placeholder }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        style={inputStyle}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

function withBorder<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function EnhancedComponent(props: P) {
    return (
      <div style={hocWrapperStyle}>
        <p style={{ marginTop: 0 }}>This component is wrapped by HOC</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function HelloCard({ name }: { name: string }) {
  return <h3>Hello, {name} 👋</h3>;
}

const EnhancedHelloCard = withBorder(HelloCard);

function ReactForwardRefHOC() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const examples = [
    {
      title: "1. React forwardRef",
      description:
        "forwardRef lets a parent component pass a ref to a child DOM element.",
      code: `const CustomInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});`,
      output: (
        <div>
          <CustomInput ref={inputRef} placeholder="Click button to focus me" />
          <br />
          <button
            style={buttonStyle}
            onClick={() => {
              inputRef.current?.focus();
              setFocused(true);
            }}
          >
            Focus Input
          </button>
          {focused && <p>Input focused using forwardRef ✅</p>}
        </div>
      ),
    },
    {
      title: "2. Higher Order Component (HOC)",
      description:
        "A HOC is a function that takes a component and returns a new enhanced component.",
      code: `function withBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}`,
      output: <EnhancedHelloCard name="Deepanshu" />,
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React forwardRef & HOC</h1>

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
  maxWidth: 700,
  overflowX: "auto",
};

const outputStyle: React.CSSProperties = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 700,
};

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  border: "1px solid #ccc",
  borderRadius: 6,
  width: 250,
  marginBottom: 10,
};

const buttonStyle: React.CSSProperties = {
  marginTop: 10,
  padding: "8px 14px",
  border: "none",
  borderRadius: 6,
  background: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};

const hocWrapperStyle: React.CSSProperties = {
  border: "2px solid #16a34a",
  padding: 16,
  borderRadius: 8,
  background: "#f0fdf4",
  maxWidth: 300,
};

export default ReactForwardRefHOC;