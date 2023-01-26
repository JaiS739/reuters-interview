import { useEffect, useState } from "react";

export const useDocTitle = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `count ${count}`;
  // }, [count]);

  const handleIncreament = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecreament = () => {
    setCount((prev) => prev - 1);
  };

  return [count, handleIncreament, handleDecreament];
};
