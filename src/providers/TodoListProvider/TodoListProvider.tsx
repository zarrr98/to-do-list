import React, { createContext, useReducer } from "react";
import {
  ADD_TASK,
  EDIT_TASK_TEXT,
  REMOVE_TASK,
  TodoListReducer,
} from "../../reducers/TodoListReducer/TodoListReducer";
import { TodoListItemType } from "../../utils/types";

export interface TodoListStates {
  list: TodoListItemType[];
}

interface TodoListContextInterface extends TodoListStates {
  addTaskToList: (text: string) => void;
  removeTaskFromList: (taskId: string) => void;
  editTaskText: (taskId: string, newText: string) => void;
}

const initialState: TodoListStates = {
  list: [],
};

export const TodoListContext = createContext<TodoListContextInterface>({
  ...initialState,
  addTaskToList: () => void true,
  removeTaskFromList: () => void true,
  editTaskText: () => void true,
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

  const removeTaskFromList = (taskId: string) => {
    dispatch({
      type: REMOVE_TASK,
      payload: {
        id: taskId,
      },
    });
  };

  const editTaskText = (taskId: string, newText: string) => {
    dispatch({
      type: EDIT_TASK_TEXT,
      payload: {
        id: taskId,
        text: newText,
      },
    });
  };

  const value = {
    ...state,
    addTaskToList,
    removeTaskFromList,
    editTaskText,
  };

  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
