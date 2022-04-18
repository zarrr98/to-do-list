import { TodoListItemType } from "../../utils/types";

const TODO_LIST_KEY = "todo-list-tasks";

export const storeTasksInStorage = (tasks: TodoListItemType[]) => {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(tasks));
};
