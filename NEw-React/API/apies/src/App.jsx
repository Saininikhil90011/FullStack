import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comment from './Components/Comment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Comment></Comment>

    </>
  )
}

export default App
