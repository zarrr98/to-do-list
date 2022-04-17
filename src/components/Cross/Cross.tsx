import React from "react";
import "./styles.scss";

const Cross = (props: { className?: string; onClick: () => void }) => {
  return (
    <span className={`${props.className} cross`} onClick={props.onClick} />
  );
};

export default Cross;
