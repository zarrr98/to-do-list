import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
