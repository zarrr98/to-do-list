import React, { createContext, useReducer } from "react";
import {
  ADD_TASK,
  TodoListReducer,
} from "../../reducers/TodoListReducer/TodoListReducer";
import { TodoListItemType } from "../../utils/types";

export interface TodoListStates {
  list: TodoListItemType[];
}

interface TodoListContextInterface extends TodoListStates {
  addTaskToList: (text: string) => void;
}

const initialState: TodoListStates = {
  list: [],
};

export const TodoListContext = createContext<TodoListContextInterface>({
  ...initialState,
  addTaskToList: () => void true,
});

const TodoListProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(TodoListReducer, initialState);

  const addTaskToList = (text: string) => {
    dispatch({
      type: ADD_TASK,
      payload: {
        text,
      },
    });
  };

  const value = {
    ...state,
    addTaskToList,
  };

  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
