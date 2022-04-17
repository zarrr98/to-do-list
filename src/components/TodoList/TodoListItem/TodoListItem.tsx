import React from "react";
import { TodoListItemType } from "../../../utils/types";
import "./styles.scss";

interface Props {
  item: TodoListItemType;
  style: React.CSSProperties;
}

const TodoListItem = ({ item, style }: Props) => {
  return (
    <div className="todo-list-item" style={style}>
      <p>{item.text}</p>
    </div>
  );
};

export default TodoListItem;
