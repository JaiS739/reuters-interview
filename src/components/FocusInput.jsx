import React, { useState, useEffect, useRef } from "react";

export const FocusInput = () => {
  const nameRef = useRef();

  const [formData, setFormdata] = useState(``);

  const handleSubmit = () => {
    setFormdata(nameRef.current.value);
    nameRef.current.value = "";
    nameRef.current.focus();
  };

  return (
    <div>
      <input type="text" autoFocus placeholder="enter name" ref={nameRef} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: formData }}></div>
    </div>
  );
};
