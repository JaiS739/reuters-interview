import React, { useState, useEffect, memo } from "react";

export const ChildComp = memo(({ id, value, handleChange }) => {
  console.log(id);
  return (
    <>
      <div>
        <input
          value={value}
          id={id}
          onChange={(e) => handleChange(id, e.target.value)}
        />
      </div>
    </>
  );
});
