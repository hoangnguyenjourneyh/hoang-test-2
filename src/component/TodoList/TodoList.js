import React, {useCallback} from "react";
import { Button } from "../StyledComponent/Button";
import Todo from "../TodoItem/TodoItem";
import { ALL, DONE, ACTIVE } from "../../constant/todoType";
import withShowItem from "../../hoc/withShowItem";
import css from "./TodoList.module.css";

const TodoList = (props) => {
  const {
    todos,
    setTodos,
    visibleType,
    isShowItem,
    onShowAll,
    onShowActive,
    onShowDone,
    darkMode,
  } = props;

  const remove = useCallback(
    (id) => {
      setTodos(todos => todos.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  const handleDone = useCallback(
    (id) => {
      const updatedTodos = listTodo => listTodo.map((todo) => {
        if (todo.id === id && todo.completed !== true) {
          return { ...todo, completed: true};
        }
        return todo;
      });
      setTodos(todos => updatedTodos(todos))
    },
    [setTodos],
  );

  const toggleAll = () => {
    const updatedTodos = todos.map((todo) => {
      return { ...todo, completed: !todo.completed };
    });
    setTodos(updatedTodos);
  }

  const toggleAllActive = () => {
    const updatedTodos = todos.map((todo) => {
      if (!todo.completed) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const toggleAllCompleted = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.completed) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const handleToggleAll = () => {
    switch (visibleType) {
      case ALL:
        return toggleAll();
      case DONE:
        return toggleAllCompleted();
      case ACTIVE:
        return toggleAllActive(); 
      default:
        return null;
    }
  }

  return (
    <div>
      <ul className={css.listContainer}>
        {(todos || []).map(
          (item) =>
            isShowItem(item) && (
              <Todo
                onClickTask={handleDone}
                remove={remove}
                key={item.id}
                todo={item}
                visibleType={visibleType}
              />
            )
        )}
      </ul>
      <div className={css.toggleWrapper}>
        <Button onClick={handleToggleAll} className={css.button} darkMode={darkMode}> Toggle All</Button>
      </div>
      <Button onClick={onShowAll} className={css.button} darkMode={darkMode}> All </Button>
      <Button onClick={onShowActive} className={css.button} darkMode={darkMode}> Active </Button>
      <Button onClick={onShowDone} className={css.button} darkMode={darkMode}> Done </Button>
    </div>
  );
};

export default withShowItem(TodoList);
