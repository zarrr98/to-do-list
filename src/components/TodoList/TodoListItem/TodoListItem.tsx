import React, { useContext, useState } from "react";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import { TodoListItemType } from "../../../utils/types";
import Cross from "../../Cross/Cross";
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
    }, 500);
  };

  const handleClickingOnItems = (e: React.MouseEvent) => {
    console.log("***** clicked", e.detail);
    if (e.detail === 2) {
      context.setEditingItemId(item.id);
    }
  };

  const handleKeyPressOnEditInput = (e: React.KeyboardEvent) => {
    e.key === "Enter" && saveEditedChanges();
  };

  const saveEditedChanges = () => {
    console.log("save edited changes :", editValue);
    const newText = editValue.trim();
    newText ? context.editTaskText(item.id, newText) : setEditValue(item.text);
  };

  const checkboxChangeHandler = (e: React.ChangeEvent) => {
    context.toggleCompletedStateOfTasks(item.id);
    console.log("changeeeeeeed ::", e.target.ariaChecked);
  };

  return (
    <div
      className={`todo-list-item ${
        isDeleted && "todo-list-item--zero-height"
      } ${isInEditMode && "todo-list-item--editing"}`}
      style={style}
      onClick={handleClickingOnItems}
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
        <p
          className={`todo-list-item__text ${
            isDeleted && "todo-list-item__text--deleted"
          }`}
        >
          {item.text}
        </p>
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
          isDeleted && "todo-list-item__delete--deleted"
        } ${isInEditMode && "todo-list-item__delete--editing"}`}
        onClick={handleDeletingItems}
      />
    </div>
  );
};

export default TodoListItem;
