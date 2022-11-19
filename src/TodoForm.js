import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="todo__form flex justify-center w-1/2">
      <form
        className="flex justify-between items-center bg-white w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="focus: outline-none p-2 w-full"
          type="text"
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
