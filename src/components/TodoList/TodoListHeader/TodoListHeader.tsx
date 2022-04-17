import React, { useContext } from "react";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import "./styles.scss";

const TodoListHeader = () => {
  const context = useContext(TodoListContext);

  return (
    <div className="todo-list-header">
      <input
        className="todo-list-header__input"
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default TodoListHeader;
