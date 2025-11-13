import React, { useState, useEffect, useRef } from "react";

function MyComp() {
  let [number, setNumber] = useState(0);
  function handleCLick() {}
  return <button onClick={handleCLick}>click me</button>;
}
export default MyComp;
