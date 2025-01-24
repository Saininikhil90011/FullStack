import { useState } from "react";
import Data from "./Componens/Data.json";
import Menue from "./Componens/Menue";

function App() {
  const [count, setCount] = useState(Data);
  // console.log(Data);

  return (
    <>
      <Menue count = {count}></Menue>
    </>
  );
}

export default App;
