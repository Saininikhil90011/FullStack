import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Friends from './components/Friends'
import Data from './components/Data'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Data />
    </>
  )
}

export default App
