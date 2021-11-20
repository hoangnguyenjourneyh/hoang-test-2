import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "../StyledComponent/Button";
import { Item } from "../StyledComponent/Item";
import css from "./TodoItem.module.css";

const Todo = ({ todo, remove, onClickTask }) => {
  const { darkMode } = useContext(ThemeContext);
  const onRemove = () => {
    remove(todo.id);
  };

  const handleClickTask = (e) => {
    onClickTask(e && e.target.id);
  };

  return (
    <div className={css.itemWrapper}>
      <Item
        id={todo.id}
        onClick={handleClickTask}
        className={todo.completed ? css.completed : ""}
        darkMode={darkMode}
      >
        {todo.task}
      </Item>
      <Button onClick={onRemove} darkMode={darkMode}>X</Button>
    </div>
  );
};

export default React.memo(Todo);
