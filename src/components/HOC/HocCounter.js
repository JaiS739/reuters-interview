import React, { useState } from "react";

const HocCounter = (WrapperComponent) => {
  function Counter() {
    const [count, setCount] = useState(0);
    const handleIncreament = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <div>
        <WrapperComponent count={count} handleIncreament={handleIncreament} />
      </div>
    );
  }
  return Counter;
};

export default HocCounter;
