import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const fruits = [
    { name: "apple", color: "pink" },
    { name: "banana", color: "yello" },
    { name: " mango", color: "red" },
  ];
  // let count = 5;
  //When we use count variable directly and try to update it in ui thats why we use hooks in react.
  function addValue() {
    // count = count + 1;
    setCount(count + 1);
  }

  let decreValue = () => {
    // count = count - 1;
    if (count < 0) {
      console.log("Count cannot be in minus.");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Varadraj Rajendra Velhal</h1>
      <h2>Counter Value {count}</h2>
      <h2>
        {fruits.map((f) => {
          return (
            <>
              <div>{f.name}</div>
              <div>{f.color}</div>
            </>
          );
        })}
      </h2>
      <button onClick={addValue}>Add Value {count}</button>
      <button onClick={decreValue}>Decrese Value {count}</button>
    </>
  );
}

export default App;
