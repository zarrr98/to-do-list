import React, { createContext, useReducer } from "react";
import {
  ADD_TASK,
  CHANGE_FILTER,
  EDIT_TASK_TEXT,
  REMOVE_TASK,
  TodoListReducer,
  TOGGLE_COMPLETED_STATE,
} from "../../reducers/TodoListReducer/TodoListReducer";
import { TodoListFilterType } from "../../utils/enums";
import { TodoListItemType } from "../../utils/types";

export interface TodoListStates {
  list: TodoListItemType[];
  filterType: TodoListFilterType;
}

interface TodoListContextInterface extends TodoListStates {
  addTaskToList: (text: string) => void;
  removeTaskFromList: (taskId: string) => void;
  editTaskText: (taskId: string, newText: string) => void;
  toggleCompletedStateOfTasks: (taskId: string) => void;
  changeTodoListFilter: (filter: TodoListFilterType) => void;
}

const initialState: TodoListStates = {
  list: [],
  filterType: TodoListFilterType.All,
};

export const TodoListContext = createContext<TodoListContextInterface>({
  ...initialState,
  addTaskToList: () => void true,
  removeTaskFromList: () => void true,
  editTaskText: () => void true,
  toggleCompletedStateOfTasks: () => void true,
  changeTodoListFilter: (filter: TodoListFilterType) => void true,
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

  const toggleCompletedStateOfTasks = (taskId: string) => {
    dispatch({
      type: TOGGLE_COMPLETED_STATE,
      payload: {
        id: taskId,
      },
    });
  };

  const changeTodoListFilter = (filter: TodoListFilterType) => {
    dispatch({
      type: CHANGE_FILTER,
      payload: {
        filter,
      },
    });
  };

  const value = {
    ...state,
    addTaskToList,
    removeTaskFromList,
    editTaskText,
    toggleCompletedStateOfTasks,
    changeTodoListFilter,
  };

  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
