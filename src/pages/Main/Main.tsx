import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* navbar */}
      <Outlet />
    </>
  );
};

export default Main;
