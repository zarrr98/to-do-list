import React, { useContext } from "react";
import "./styles.scss";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListFilterType } from "../../../utils/enums";

const TodoTasksList = () => {
  const context = useContext(TodoListContext);

  const getFilteredList = () => {
    if (context.filterType === TodoListFilterType.All) return context.list;
    return context.list.filter((task) => !task.isCompleted);
  };

  return (
    <div className="todo-tasks-list custome-scroll-bar">
      {getFilteredList().map((task) => {
        return <TodoListItem key={task.id} item={task} style={{}} />;
      })}
    </div>
  );
};

export default TodoTasksList;
