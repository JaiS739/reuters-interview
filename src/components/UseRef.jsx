import React, { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [names, setNames] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = names;
  }, [names]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setNames(e.target.value)}
        value={names}
      />
      <button>Submit</button>
      <div>
        my name is {names} and it is used to be {prevName.current}.
      </div>
    </div>
  );
};
