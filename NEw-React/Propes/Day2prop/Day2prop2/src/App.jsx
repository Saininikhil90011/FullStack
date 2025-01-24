import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './components/Data.json'
import Catalogs from './components/Catalogs'

function App() {
  const [count, setCount] = useState(Data)

  return (
    <>
     <Catalogs count = {count}></Catalogs>
    </>
  )
}

export default App
