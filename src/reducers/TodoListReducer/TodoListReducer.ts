import { TodoListStates } from "../../providers/TodoListProvider/TodoListProvider";
import { ReducerActionType } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

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
    default:
      return state;
  }
};
