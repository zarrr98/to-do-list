import React, { useContext, useState } from "react";
import { useDoubleTap } from "use-double-tap";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import { TodoListFilterType } from "../../../utils/enums";
import { TodoListItemType } from "../../../utils/types";
import Cross from "../../Cross/Cross";
import { performDeletingAnimationOnTasks } from "../functions";
import "./styles.scss";

interface Props {
  item: TodoListItemType;
  style: React.CSSProperties;
}

const TodoListItem = ({ item, style }: Props) => {
  const context = useContext(TodoListContext);

  const [isDeleted, setIsDeleted] = useState(false);
  const [editValue, setEditValue] = useState(item.text);
  const isInEditMode = context.editingItemId === item.id;

  const handleDeletingItems = () => {
    setIsDeleted(true);
    setTimeout(() => {
      context.removeTaskFromList([item.id]);
    }, 200);
  };

  const doubleClickHandler = useDoubleTap((event) => {
    context.setEditingItemId(item.id);
  });

  const handleKeyPressOnEditInput = (e: React.KeyboardEvent) => {
    e.key === "Enter" && saveEditedChanges();
  };

  const saveEditedChanges = () => {
    const newText = editValue.trim();
    newText ? context.editTaskText(item.id, newText) : setEditValue(item.text);
  };

  const checkboxChangeHandler = () => {
    context.filterType === TodoListFilterType.Active
      ? performDeletingAnimationOnTasks([item.id], () =>
          context.toggleCompletedStateOfTasks(item.id)
        )
      : context.toggleCompletedStateOfTasks(item.id);
  };

  return (
    <div
      {...doubleClickHandler}
      className={`todo-list-item ${
        isDeleted && "todo-list-item--zero-height"
      } ${isInEditMode && "todo-list-item--editing"}`}
      style={style}
      id={`todo-list-item-id__${item.id}`}
    >
      {isInEditMode ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyPressOnEditInput}
          onBlur={saveEditedChanges}
          className={`todo-list-item__input`}
        />
      ) : (
        <p className={`todo-list-item__text`}>{item.text}</p>
      )}
      <input
        type="checkbox"
        className={`todo-list-item__checkbox ${
          (isDeleted || isInEditMode) && "todo-list-item__checkbox--hide"
        } `}
        onClick={(e) => e.stopPropagation()}
        onChange={checkboxChangeHandler}
        checked={item.isCompleted}
      ></input>
      <Cross
        className={`todo-list-item__delete ${
          isInEditMode && "todo-list-item__delete--editing"
        }`}
        onClick={handleDeletingItems}
      />
    </div>
  );
};

export default TodoListItem;
