import React, { useContext } from "react";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import "./styles.scss";

const TodoListFooter = () => {
  const context = useContext(TodoListContext);

  const getNumberofUndoneTasks = () => {
    return context.list.reduce((prev, current) => {
      let currentValue = current.isCompleted ? 0 : 1;
      return prev + currentValue;
    }, 0);
  };

  return (
    <div className="todo-list-footer">
      <p>
        <strong>{getNumberofUndoneTasks()}</strong> items left
      </p>
    </div>
  );
};

export default TodoListFooter;
