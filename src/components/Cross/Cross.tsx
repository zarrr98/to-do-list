import React from "react";
import "./styles.scss";

const Cross = (props: { className?: string }) => {
  return <span className={`${props.className} cross `} />;
};

export default Cross;
