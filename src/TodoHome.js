import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoHome = () => {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  };

  return (
    <div className="todo flex flex-col items-center justify-center w-1/2 mx-auto">
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 && <TodoList todos={todos} />}
    </div>
  );
};

export default TodoHome;
