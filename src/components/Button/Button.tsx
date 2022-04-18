import React from "react";
import "./styles.scss";

interface Props {
  title: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ title, onClick, className = "" }: Props) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
