import React from "react";
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import "./styles.scss";

const TodoListContent = () => {
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Todo</h1>
      <div className="todo-list__box">
        <TodoListHeader />
      </div>
    </div>
  );
};

export default TodoListContent;
