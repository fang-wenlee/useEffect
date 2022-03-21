import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter1.js";
import TodosList from "./TodosList";
//import Counter from "./Counter";
// import TodoList from "./TodoList";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1> Use effect</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter " : "Show Counter"}
      </button>
      {showCounter && <Counter />}

      <TodosList />
      {/* <TodoList />
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counter />} */}
    </div>
  );
}
