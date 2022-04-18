import React, { useContext } from "react";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import Button from "../../Button/Button";
import TodoListFilter from "../TodoListFilter/TodoListFilter";
import "./styles.scss";

const TodoListFooter = () => {
  const context = useContext(TodoListContext);

  const getNumberofUndoneTasks = () => {
    return context.list.reduce((prev, current) => {
      let currentValue = current.isCompleted ? 0 : 1;
      return prev + currentValue;
    }, 0);
  };

  const removeCompletedTasks = () => {
    const completes = getCompletedTaskIds();
    context.removeTaskFromList(completes);
  };

  const getCompletedTaskIds = () => {
    return context.list.reduce((prev, current) => {
      let tasks = [...prev];
      if (current.isCompleted) tasks.push(current.id);
      return tasks;
    }, [] as string[]);
  };

  return context.list.length && !context.editingItemId ? (
    <div className="todo-list-footer">
      <p>
        <strong>{getNumberofUndoneTasks()}</strong> items left
      </p>
      <TodoListFilter />
      <Button title="Clear completed" onClick={removeCompletedTasks} />
    </div>
  ) : (
    <></>
  );
};

export default TodoListFooter;
