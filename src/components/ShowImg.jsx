import React, { useEffect, useRef, useState } from "react";

export const ShowImg = () => {
  const [imgValue, setImgValue] = useState();
  const [imgTag, setImgTag] = useState(``);

  const imgRef = useRef();

  const handleSubmit = () => {
    setImgTag(imgValue);
    setImgValue("");
  };

  useEffect(() => {
    imgRef.current.focus();
  });

  // <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt=""/>

  return (
    <>
      <div>
        <input
          ref={imgRef}
          type="text"
          value={imgValue && imgValue}
          onChange={(e) => setImgValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>

        <div dangerouslySetInnerHTML={{ __html: imgTag }}></div>
      </div>
    </>
  );
};
