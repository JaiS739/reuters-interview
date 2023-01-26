import React from "react";
import HocCounter from "./HocCounter";

const HoverCounter = ({ count, handleIncreament }) => {
  return (
    <div>
      {count}
      <button onMouseOver={handleIncreament}>Hover</button>
    </div>
  );
};

export default HocCounter(HoverCounter);
