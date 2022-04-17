import React from "react";
import { TodoListItemType } from "../../../utils/types";
import Cross from "../../Cross/Cross";
import "./styles.scss";

interface Props {
  item: TodoListItemType;
  style: React.CSSProperties;
  deleteItem: () => void;
}

const TodoListItem = ({ item, style, deleteItem }: Props) => {
  return (
    <div className="todo-list-item" style={style}>
      <p>{item.text}</p>
      <Cross className="todo-list-item__delete" onClick={deleteItem} />
    </div>
  );
};

export default TodoListItem;
