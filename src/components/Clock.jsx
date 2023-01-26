import React, { useEffect, useState } from "react";
import { ClearInterval } from "./ClearInterval";

export const Clock = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <ClearInterval />}
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
    </div>
  );
};
