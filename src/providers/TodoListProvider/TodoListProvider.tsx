import React, { createContext, useReducer } from "react";
import { TodoListReducer } from "../../reducers/TodoListReducer/TodoListReducer";

interface TodoListItemI {
  text: string;
  isCompleted: boolean;
}

export interface TodoListStates {
  list: TodoListItemI[];
}

interface TodoListContextInterface extends TodoListStates {}

const initialState: TodoListStates = {
  list: [],
};

export const TodoListContext = createContext<TodoListContextInterface>({
  ...initialState,
});

const TodoListProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(TodoListReducer, initialState);

  const value = {
    ...state,
  };

  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
