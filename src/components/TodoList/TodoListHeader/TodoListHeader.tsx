import React, { useContext, useState } from "react";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import "./styles.scss";

const TodoListHeader = () => {
  const context = useContext(TodoListContext);
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const keyPressEventListener = (e: React.KeyboardEvent) => {
    e.key === "Enter" && handleAddingTask();
  };

  const handleAddingTask = () => {
    const value = inputValue.trim();
    if (value) {
      context.addTaskToList(value);
      setInputValue("");
    }
  };

  return (
    <div className="todo-list-header">
      <input
        className="todo-list-header__input"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={inputChangeHandler}
        onKeyDown={keyPressEventListener}
      />
    </div>
  );
};

export default TodoListHeader;
