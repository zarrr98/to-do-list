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
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(item.text);

  const handleDeletingItems = () => {
    setIsDeleted(true);
    setTimeout(() => {
      context.removeTaskFromList(item.id);
    }, 500);
  };

  const handleClickingOnItems = (e: React.MouseEvent) => {
    console.log("***** clicked", e.detail);
    if (e.detail === 2) {
      !isEditMode && setIsEditMode(true);
    }
  };

  const handleKeyPressOnEditInput = (e: React.KeyboardEvent) => {
    e.key === "Enter" && saveEditedChanges();
  };

  const saveEditedChanges = () => {
    console.log("save edited changes :", editValue);
    const newText = editValue.trim();
    if (newText) {
      context.editTaskText(item.id, newText);
      setIsEditMode(false);
    }
  };

  return (
    <div
      className={`todo-list-item ${
        isDeleted && "todo-list-item--zero-height"
      } ${isEditMode && "todo-list-item--editing"}`}
      style={style}
      onClick={handleClickingOnItems}
    >
      {isEditMode ? (
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
          (isDeleted || isEditMode) && "todo-list-item__checkbox--hide"
        } `}
      ></input>
      <Cross
        className={`todo-list-item__delete ${
          isDeleted && "todo-list-item__delete--deleted"
        } ${isEditMode && "todo-list-item__delete--editing"}`}
        onClick={handleDeletingItems}
      />
    </div>
  );
};

export default TodoListItem;
