import React from "react";

export default function Button(props) {
  let value = parseInt(props.name.substring(1));
  let newValue =
    props.action === "add" ? props.count + value : props.count - value;

  newValue = newValue > 9999 ? newValue - 10000 : newValue < 0 ? 0 : newValue;

  return (
    <button
      style={buttonStyle}
      onClick={() => props.setCount(newValue)}
      className="btn btn-dark m-1 p-3"
    >
      {props.name}
    </button>
  );
}

const buttonStyle = {
  minWidth: "5rem",
};
