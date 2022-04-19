import React from "react";
import TodoListFooter from "../TodoListFooter/TodoListFooter";
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoTasksList from "../TodoTasksList/TodoTasksList";
import "./styles.scss";

const TodoListContent = () => {
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Todo</h1>
      <div className="todo-list__box">
        <div className="todo-list__top-bar" />
        <TodoListHeader />
        <TodoTasksList />
      </div>
      <div className="todo-list__box-bottom" />
      <TodoListFooter />
    </div>
  );
};

export default TodoListContent;
