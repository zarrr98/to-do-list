import React, { useContext, useRef } from "react";
import "./styles.scss";
// import {
//   AutoSizer,
//   List,
//   CellMeasurer,
//   CellMeasurerCache,
// } from "react-virtualized";
import { TodoListContext } from "../../../providers/TodoListProvider/TodoListProvider";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListFilterType } from "../../../utils/enums";

const TodoVirtualList = () => {
  const context = useContext(TodoListContext);
  // const listSizeCache = useRef(
  //   new CellMeasurerCache({
  //     fixedWidth: true,
  //     defaultHeight: 100,
  //   })
  // );

  const getFilteredList = () => {
    if (context.filterType === TodoListFilterType.All) return context.list;
    return context.list.filter((task) => !task.isCompleted);
  };

  return (
    <div className="todo-virtual-list custome-scroll-bar">
      {getFilteredList().map((task) => {
        return <TodoListItem key={task.id} item={task} style={{}} />;
      })}
      {/* <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={listSizeCache.current.rowHeight}
            deferredMeasurementCache={listSizeCache.current}
            rowCount={context.list.length}
            rowRenderer={({ key, index, style, parent }) => {
              const task = context.list[index];
              return (
                <CellMeasurer
                  key={key}
                  cache={listSizeCache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  <TodoListItem
                    item={task}
                    style={style}
                    deleteItem={() => deleteTask(index)}
                  />
                </CellMeasurer>
              );
            }}
          />
        )}
      </AutoSizer> */}
    </div>
  );
};

export default TodoVirtualList;
