import { TodoListStates } from "../../providers/TodoListProvider/TodoListProvider";
import { ReducerActionType } from "../../utils/types";

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const TodoListReducer = (
  state: TodoListStates,
  action: ReducerActionType
) => {
  switch (action.type) {
    case ADD_TASK: {
      const newList = [
        ...state.list,
        { text: action.payload.text, isCompleted: false },
      ];
      return {
        ...state,
        list: newList,
      };
    }

    case REMOVE_TASK: {
      let newList = [...state.list];
      newList.splice(action.payload.index, 1);
      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
};
