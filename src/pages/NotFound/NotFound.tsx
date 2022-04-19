import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Lost your way?</h1>
      <p className="not-found__desc">
        Sorry, we can't find that page. Don't worry though, you can get back and
        keep managing your tasks.
      </p>
      <Link to={"/"} className="not-found__btn">
        To-Do List
      </Link>
    </div>
  );
};

export default NotFound;
