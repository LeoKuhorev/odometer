import React from "react";

export default function Number(props) {
  return (
    <div>
      <p style={numberStyle}>{props.value}</p>
    </div>
  );
}

const numberStyle = {
  fontFamily: "Major Mono Display, monospace",
  fontSize: "4rem",
  border: "2px solid black",
  fontWeight: "bold",
  padding: "2rem",
  marginBottom: "2rem",
};
