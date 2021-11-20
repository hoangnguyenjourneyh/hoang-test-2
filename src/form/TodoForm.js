import React, { useRef } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ createTodo }) {
  const inputRef = useRef();

  const handleSubmit = evt => {
    const userInput = inputRef.current.value;
    evt.preventDefault();
    const newTodo = { id: uuid(), task: userInput, completed: false };
    createTodo(newTodo);
    evt.target.reset();
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        name="todo"
        placeholder="Enter todo name here"
        defaultValue=""
      />
    </form>
  );
}

export default React.memo(NewTodoForm);
