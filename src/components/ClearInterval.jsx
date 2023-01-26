import React, { useEffect, useState } from "react";

export const ClearInterval = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      console.log("time", time);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("clock component cleared");
    };
  }, []);
  return (
    <>
      <div>{time.toLocaleTimeString()}</div>
    </>
  );
};
