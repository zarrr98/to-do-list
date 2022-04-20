import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import TodoList from "../pages/TodoList/TodoList";

//eslint-disable-next-line
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<TodoList />} />
          <Route path=":filter" element={<TodoList />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
