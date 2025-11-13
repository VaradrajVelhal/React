import React, { useState, useEffect } from "react";
function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);
  window.addEventListener("resize", handleResize);
  function handleResize() {
    setWidth(window.innerWidth);
    setheight(window.innerHeight);
  }
  return (
    <div>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
}
export default MyComponent;
