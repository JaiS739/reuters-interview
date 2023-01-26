import React, { useState, useCallback } from "react";
import { ChildComp } from "./ChildComp";

export const OpitmisationMain = () => {
  const [itemValue, setItemvalue] = useState([
    { id: 1, value: "" },
    {
      id: 2,
      value: ""
    },
    {
      id: 3,
      value: ""
    }
  ]);

  const handleChange = useCallback((id, value) => {
    setItemvalue((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.value = value;
        }
        return item;
      })
    );
  }, []);

  return (
    <>
      <div>
        <p>{JSON.stringify(itemValue)}</p>
        <div>
          {itemValue.map((items) => (
            <ChildComp
              key={items.id}
              id={items.id}
              value={items.value}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};
