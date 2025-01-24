import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apiprop from './Components/Apiprop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Apiprop></Apiprop>
    </>
  )
}

export default App
