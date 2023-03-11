import React, { useState, useEffect } from "react";
import Axios from "axios";

function ToDo() {
  const [todo, setToDo] = useState([]);

  const fetchToDo = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todo = data;
    setToDo(todo);
    console.log(todo);
  };

  useEffect(() => {
    fetchToDo();
  }, []);

  return (
    <div>
      {todo.map((todo) => (
          <>
          <p key={todo.userId}>{todo.userId}</p>
        <p key={todo.id}>{todo.id}</p>
        <p key={todo.title}>{todo.title}</p>

        </>
      ))}
    </div>
  );
}

export default ToDo;
