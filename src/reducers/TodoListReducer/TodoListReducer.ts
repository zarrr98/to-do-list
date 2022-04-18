import { TodoListStates } from "../../providers/TodoListProvider/TodoListProvider";
import { ReducerActionType } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK_TEXT = "EDIT_TASK_TEXT";
export const TOGGLE_COMPLETED_STATE = "TOGGLE_COMPLETED_STATE";
export const CHANGE_FILTER = "CHANGE_FILTER";

export const TodoListReducer = (
  state: TodoListStates,
  action: ReducerActionType
) => {
  switch (action.type) {
    case ADD_TASK: {
      const id = uuidv4();

      const newList = [
        ...state.list,
        { text: action.payload.text, isCompleted: false, id },
      ];
      return {
        ...state,
        list: newList,
      };
    }

    case REMOVE_TASK: {
      let newList = state.list.filter((task) => task.id !== action.payload.id);

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

      return {
        ...state,
        list: newList,
      };
    }

    case TOGGLE_COMPLETED_STATE: {
      console.log("toggling completed state ....");

      const { id } = action.payload;
      const taskIndx = state.list.findIndex((t) => t.id === id);
      const newList = [...state.list];
      newList[taskIndx] = {
        ...newList[taskIndx],
        isCompleted: !newList[taskIndx].isCompleted,
      };

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
    default:
      return state;
  }
};
