export type ReducerActionType = {
  type: string;
  payload: any;
};

export type TodoListItemType = {
  id: string;
  text: string;
  isCompleted: boolean;
};
