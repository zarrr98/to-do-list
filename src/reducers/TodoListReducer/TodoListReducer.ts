import { TodoListStates } from "../../providers/TodoListProvider/TodoListProvider";
import { ReducerActionType } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import { storeTasksInStorage } from "../../components/TodoList/functions";

export const SET_LIST = "SET_LIST";
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK_TEXT = "EDIT_TASK_TEXT";
export const TOGGLE_COMPLETED_STATE = "TOGGLE_COMPLETED_STATE";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const SET_EDITING_ITEM_ID = "SET_EDITING_ITEM_ID";

export const TodoListReducer = (
  state: TodoListStates,
  action: ReducerActionType
) => {
  switch (action.type) {
    case SET_LIST: {
      const { tasks } = action.payload;
      storeTasksInStorage(tasks);
      return { ...state, list: tasks };
    }

    case ADD_TASK: {
      const id = uuidv4();

      const newList = [
        ...state.list,
        { text: action.payload.text, isCompleted: false, id },
      ];
      storeTasksInStorage(newList);
      return {
        ...state,
        list: newList,
      };
    }

    case REMOVE_TASK: {
      const ids: string[] = action.payload.ids;
      let newList = state.list.filter((task) => !ids.includes(task.id));
      storeTasksInStorage(newList);
      return {
        ...state,
        list: newList,
      };
    }

    case EDIT_TASK_TEXT: {
      const { id, text } = action.payload;
      const newList = [...state.list];
      newList.forEach((task, i) => {
        task.id === id && (newList[i].text = text);
      });
      storeTasksInStorage(newList);
      return {
        ...state,
        list: newList,
        editingItemId: "",
      };
    }

    case TOGGLE_COMPLETED_STATE: {
      const { id } = action.payload;
      const taskIndx = state.list.findIndex((t) => t.id === id);
      const newList = [...state.list];
      newList[taskIndx] = {
        ...newList[taskIndx],
        isCompleted: !newList[taskIndx].isCompleted,
      };
      storeTasksInStorage(newList);
      return {
        ...state,
        list: newList,
      };
    }

    case CHANGE_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        filterType: filter,
      };
    }

    case SET_EDITING_ITEM_ID: {
      const { id } = action.payload;
      let isValidId = state.list.map((task) => task.id).includes(id);
      return {
        ...state,
        editingItemId: isValidId ? id : "",
      };
    }
    default:
      return state;
  }
};
