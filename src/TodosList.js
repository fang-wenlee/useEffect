import React, { useEffect, useState } from "react";
import axios from "axios";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);
  console.log(todos);
  return (
    <div>
      <h6> Todo list:</h6>
      {todos && todos.map((todo) => <h3>{todo.title}</h3>)}
    </div>
  );
};

export default TodosList;
