import { TodoListStates } from "../../providers/TodoListProvider/TodoListProvider";
import { ReducerActionType } from "../../utils/types";

export const TodoListReducer = (
  state: TodoListStates,
  action: ReducerActionType
) => {
  switch (action.type) {
    default:
      return state;
  }
};
