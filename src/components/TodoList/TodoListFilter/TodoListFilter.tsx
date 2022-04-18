import React, { useContext, useRef } from "react";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import { TodoListFilterType } from "../../../utils/enums";
import "./styles.scss";

const TodoListFilter = () => {
  const context = useContext(TodoListContext);

  return (
    <div className="todo-list-filter">
      <span
        className={`todo-list-filter__option ${
          context.filterType === TodoListFilterType.All &&
          "todo-list-filter__option--active"
        }`}
        onClick={() => context.changeTodoListFilter(TodoListFilterType.All)}
      >
        All
      </span>
      &nbsp;&nbsp;
      <span
        className={`todo-list-filter__option ${
          context.filterType === TodoListFilterType.Active &&
          "todo-list-filter__option--active"
        }`}
        onClick={() => context.changeTodoListFilter(TodoListFilterType.Active)}
      >
        Active
      </span>
    </div>
  );
};

export default TodoListFilter;
