import React from "react";
import TodoListContent from "../../components/TodoList/TodoListContent/TodoListContent";
import TodoListProvider from "../../providers/TodoListProvider/TodoListProvider";

const TodoList = () => {
  return (
    <TodoListProvider>
      <TodoListContent />
    </TodoListProvider>
  );
};

export default TodoList;
