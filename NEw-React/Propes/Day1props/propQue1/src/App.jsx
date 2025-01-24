import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grandfather from './Components/Grandfather'


function App() {
  const [count, setCount] = useState({Grandfather:"pravatlal",father:"kaluram",me:"nikhil",child:"suraj"})
  

  return (
    <>
     
     <Grandfather count={count} age="80" ></Grandfather>
     
    </>
  )
}

export default App
