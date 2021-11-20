import React, { useState, useContext, useCallback } from "react";
import NewTodoForm from "../form/TodoForm";
import TodoList from "../component/TodoList/TodoList";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "../component/StyledComponent/Button";
import { Container } from "../component/StyledComponent/Container";
import css from "./TodoPage.module.css";

export const TodoPage = (props) => {
  const [todos, setTodos] = useState([]);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const create = useCallback(
    (newTodo) => {
      setTodos(todos => [...todos, newTodo]);
    },
    [setTodos],
  );

  return (
    <Container className={css.container} darkMode={darkMode}>
      <h1> Todo List </h1>
      <Button
        onClick={toggleDarkMode}
        className={css.button}
        darkMode={darkMode}
      >
        Toggle theme
      </Button>
      <NewTodoForm createTodo={create} />
      <TodoList todos={todos} setTodos={setTodos} darkMode={darkMode} />
    </Container>
  );
};
