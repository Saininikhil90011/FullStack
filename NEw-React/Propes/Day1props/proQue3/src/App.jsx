import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Busno1 from './Components/Busno1'
import Data from "./Data.json";

function App() {
  const [count, setCount] = useState(Data)
  //api
  
  //

  return (
    <>
  <Busno1 count ={count} time ="1 Hour" ></Busno1>
      
    </>
  )
}

export default App
