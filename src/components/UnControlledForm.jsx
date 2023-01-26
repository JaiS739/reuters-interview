import React, { useRef } from "react";

export const UnControlledForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", firstNameRef.current.value.toUpperCase());
    console.log("form submitted", lastNameRef.current.value.toUpperCase());
  };

  return (
    <>
      <div>
        <h1>Un-Controlled Form</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="first-name" ref={firstNameRef} />

          <input type="text" placeholder="last-name" ref={lastNameRef} />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
