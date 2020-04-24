import React from "react";
import "./input.style.css";

const input = (props) => {
  const { id, className, ...restOfTheProps } = props;
  return (
    <div className="input-container">
      <input
        id={id}
        className={`input-feild ${props.className}`}
        {...restOfTheProps}
      />
    </div>
  );
};

export default input;
