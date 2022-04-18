import React, { createContext, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getTasksFromStorage } from "../../components/TodoList/functions";
import {
  ADD_TASK,
  CHANGE_FILTER,
  EDIT_TASK_TEXT,
  REMOVE_TASK,
  SET_EDITING_ITEM_ID,
  SET_LIST,
  TodoListReducer,
  TOGGLE_COMPLETED_STATE,
} from "../../reducers/TodoListReducer/TodoListReducer";
import { TodoListFilterType } from "../../utils/enums";
import { changeUrl } from "../../utils/functions";
import { TodoListItemType } from "../../utils/types";

export interface TodoListStates {
  list: TodoListItemType[];
  filterType: TodoListFilterType;
  editingItemId: string;
}

interface TodoListContextInterface extends TodoListStates {
  addTaskToList: (text: string) => void;
  removeTaskFromList: (tasksIds: string[]) => void;
  editTaskText: (taskId: string, newText: string) => void;
  toggleCompletedStateOfTasks: (taskId: string) => void;
  changeTodoListFilter: (filter: TodoListFilterType) => void;
  setEditingItemId: (id: string) => void;
}

const initialState: TodoListStates = {
  list: [],
  filterType: TodoListFilterType.All,
  editingItemId: "",
};

export const TodoListContext = createContext<TodoListContextInterface>({
  ...initialState,
  addTaskToList: () => void true,
  removeTaskFromList: () => void true,
  editTaskText: () => void true,
  toggleCompletedStateOfTasks: () => void true,
  changeTodoListFilter: () => void true,
  setEditingItemId: () => void true,
});

const TodoListProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(TodoListReducer, initialState);
  const params = useParams();

  useEffect(() => {
    changeUrl(`/${state.filterType}`);
  }, [state.filterType]);

  useEffect(() => {
    getFilterValueFromUrl();
  }, []);

  useEffect(() => {
    retrieveInitialTasksFromStorage();
  }, []);

  const retrieveInitialTasksFromStorage = () => {
    const tasks = getTasksFromStorage();
    setList(tasks as TodoListItemType[]);
  };

  const getFilterValueFromUrl = () => {
    let defaultFilter = TodoListFilterType.All;
    params.filter &&
      Object.values(TodoListFilterType).forEach((filter) => {
        filter === params.filter?.toLowerCase() && (defaultFilter = filter);
      });

    changeTodoListFilter(defaultFilter);
  };

  const setList = (list: TodoListItemType[]) => {
    dispatch({
      type: SET_LIST,
      payload: {
        tasks: list,
      },
    });
  };

  const addTaskToList = (text: string) => {
    dispatch({
      type: ADD_TASK,
      payload: {
        text,
      },
    });
  };

  const removeTaskFromList = (tasksIds: string[]) => {
    dispatch({
      type: REMOVE_TASK,
      payload: {
        ids: tasksIds,
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

  const setEditingItemId = (id: string) => {
    dispatch({
      type: SET_EDITING_ITEM_ID,
      payload: {
        id,
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
    setEditingItemId,
  };

  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
