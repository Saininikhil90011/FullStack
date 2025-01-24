import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerHook from './ReducerHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ReducerHook/>
    </>
  )
}

export default App
