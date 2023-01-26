import React from "react";
import HocCounter from "./HocCounter";

const ClickCounter = ({ count, handleIncreament }) => {
  return (
    <div>
      {count}
      <button onClick={handleIncreament}>Click</button>
    </div>
  );
};

export default HocCounter(ClickCounter);
