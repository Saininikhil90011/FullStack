import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Events from "./Events";
import State from "./State";
import Forms from "./Forms";
import ToDo from "./ToDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Events /> */}
      {/* <State/> */}
      {/* <Forms/> */}
      <ToDo/>
    </>
  );
}

export default App;
