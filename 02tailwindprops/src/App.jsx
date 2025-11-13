import Comp1 from "./Components/Comp1";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-amber-600 p-6 rounded-xl text-white">tailwind demo</h1>
      <Comp1 username="Raj" />
      <Comp1 username="Mukesh" />
    </>
  );
}

export default App;
