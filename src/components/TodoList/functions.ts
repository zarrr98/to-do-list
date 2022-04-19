import { TodoListItemType } from "../../utils/types";

const TODO_LIST_KEY = "todo-list-tasks";

export const storeTasksInStorage = (tasks: TodoListItemType[]) => {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(tasks));
};

export const getTasksFromStorage = () => {
  let tasks = localStorage.getItem(TODO_LIST_KEY);
  if (!tasks) return [];
  tasks = JSON.parse(tasks);
  const isValid = isTodoTasksValid(tasks);
  return isValid ? tasks : [];
};

const isTodoTasksValid = (tasks: any) => {
  const essentialKeys = ["id", "text", "isCompleted"];

  if (!tasks || !Array.isArray(tasks)) return false;
  for (const task of tasks) {
    for (const key of essentialKeys) {
      if (!(key in task)) return false;
    }
  }

  return true;
};

export const performDeletingAnimationOnTasks = (
  taskIds: string[],
  callback: () => void
) => {
  for (const taskId of taskIds) {
    let taskElement = document.getElementById(`todo-list-item-id__${taskId}`);
    if (taskElement) {
      taskElement.classList.add("todo-list-item--zero-height");
    }
  }

  setTimeout(() => {
    callback();
  }, 200);
};
