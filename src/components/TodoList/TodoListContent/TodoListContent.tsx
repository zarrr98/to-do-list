import React from "react";
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoVirtualList from "../TodoVirtualList/TodoVirtualList";
import "./styles.scss";

const TodoListContent = () => {
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Todo</h1>
      <div className="todo-list__box">
        <div className="todo-list__top-bar" />
        <TodoListHeader />
        <TodoVirtualList />
      </div>
    </div>
  );
};

export default TodoListContent;
