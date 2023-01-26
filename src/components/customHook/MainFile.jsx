import React from "react";
import { useDocTitle } from "./useDocTitle";

export const MainFile = () => {
  // useDocTitle(count);
  const [count, handleIncreament, handleDecreament] = useDocTitle();

  return (
    <div>
      <div>
        <h1>Count :{count}</h1>
      </div>

      <button disabled={count < 1} onClick={handleDecreament}>
        Decreament
      </button>
      <button disabled={count >= 5} onClick={handleIncreament}>
        Increament
      </button>
    </div>
  );
};
