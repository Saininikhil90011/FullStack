import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apiprops from './Components/Apiprops'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Apiprops></Apiprops>
    </>
  )
}

export default App
