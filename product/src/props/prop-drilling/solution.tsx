import { createContext, useContext } from "react";
import * as React from 'react';

//Creating a context
const userContext = createContext({user: ''});

function TestSolution() {
  return (
    <div>
      <Navbar />
      <userContext.Provider value={{ user: "Steve" }}>
        <MainPage />
      </userContext.Provider>
    </div>
  );
}
export default TestSolution;

function Navbar() {
  return <nav style={{ background: "#10ADDE", color: "#fff" }}>Demo App</nav>;
}

function MainPage() {
  return (
    <div>
      <h3>Main Page</h3>
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div>
      <Message />
    </div>
  );
}

function Message() {
// Getting access to the state provided by the context provider wrapper
  const { user } = useContext(userContext);
  return <p>Welcome {user} :)</p>;
}