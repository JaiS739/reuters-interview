import React, { useState, useEffect } from "react";

export const Variable = () => {
  let count = "hi";

  const handleClick = () => {
    count = "bye";
    console.log(count);
  };

  return (
    <div>
      {count}
      <div>
        <button onClick={handleClick}>Increament</button>
      </div>
    </div>
  );
};
