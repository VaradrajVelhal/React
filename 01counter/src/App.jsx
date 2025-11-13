import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  // let count = 5;
  //When we use count variable directly and try to update it in ui thats why we use hooks in react.
  const addValue = () => {
    count = count + 1;
    setCount(count);
  };
  const decreValue = () => {
    count = count - 1;
    if (count < 0) {
      console.log("Count cannot be in minus.");
    } else {
      setCount(count);
    }
  };

  return (
    <>
      <h1>Varadraj Rajendra Velhal</h1>
      <h2>Counter Value {count}</h2>
      <button onClick={addValue}>Add Value {count}</button>
      <button onClick={decreValue}>Decrese Value {count}</button>
    </>
  );
}

export default App;
