import React, { useState } from "react";
import { TodoListItemType } from "../../../utils/types";
import Cross from "../../Cross/Cross";
import "./styles.scss";

interface Props {
  item: TodoListItemType;
  style: React.CSSProperties;
  deleteItem: () => void;
}

const TodoListItem = ({ item, style, deleteItem }: Props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDeletingItems = () => {
    setIsDeleted(true);
    setTimeout(() => {
      deleteItem();
    }, 500);
  };

  return (
    <div
      className={`todo-list-item ${isDeleted && "todo-list-item--zero-height"}`}
      style={style}
    >
      <p
        className={`todo-list-item__text ${
          isDeleted && "todo-list-item__text--deleted"
        }`}
      >
        {item.text}
      </p>
      <Cross
        className={`todo-list-item__delete ${
          isDeleted && "todo-list-item__delete--deleted"
        }`}
        onClick={handleDeletingItems}
      />
    </div>
  );
};

export default TodoListItem;
