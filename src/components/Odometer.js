import React, { useState } from "react";
import Button from "./Button";
import Number from "./Number";

export default function Odometer() {
  const [count, setCount] = useState(0);

  return (
    <div style={odometerStyle}>
      <div className="d-flex flex-row justify-content-center">
        <Number value={String(count).padStart(4, "0")} />
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Button setCount={setCount} name="+1" action="add" count={count} />
        <Button setCount={setCount} name="+10" action="add" count={count} />
        <Button setCount={setCount} name="+100" action="add" count={count} />
        <Button setCount={setCount} name="+1000" action="add" count={count} />
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Button setCount={setCount} name="-1" count={count} />
        <Button setCount={setCount} name="-10" count={count} />
        <Button setCount={setCount} name="-100" count={count} />
        <Button setCount={setCount} name="-1000" count={count} />
      </div>
    </div>
  );
}

const odometerStyle = {
  marginTop: "10rem",
};
