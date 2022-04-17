import React from "react";
import { TodoListItemType } from "../../../utils/types";
import Cross from "../../Cross/Cross";
import "./styles.scss";

interface Props {
  item: TodoListItemType;
  style: React.CSSProperties;
}

const TodoListItem = ({ item, style }: Props) => {
  return (
    <div className="todo-list-item" style={style}>
      <p>{item.text}</p>
      <Cross className="todo-list-item__delete" />
    </div>
  );
};

export default TodoListItem;
