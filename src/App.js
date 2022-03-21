import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";
import TodoList from "./TodoList";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1> Our App</h1>
      <TodoList />
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counter />}
    </div>
  );
}
