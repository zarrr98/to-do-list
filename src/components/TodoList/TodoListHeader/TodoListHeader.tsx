import React, { useContext, useEffect, useRef, useState } from "react";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import "./styles.scss";

const TodoListHeader = () => {
  const context = useContext(TodoListContext);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    const inputDomNode = inputRef.current;
    inputDomNode?.addEventListener("keypress", keyPressEventListener);

    return () =>
      inputDomNode?.removeEventListener("keypress", keyPressEventListener);
  }, [inputValue]);

  const keyPressEventListener = (e: KeyboardEvent) => {
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
        onChange={(e) => inputChangeHandler(e)}
        ref={inputRef}
      />
    </div>
  );
};

export default TodoListHeader;
