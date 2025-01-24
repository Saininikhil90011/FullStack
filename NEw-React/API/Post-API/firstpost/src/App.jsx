import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './Components/RegistrationForm'
import Login from './Components/Login'
import Forget from './Components/Forget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <RegistrationForm></RegistrationForm> */}
     <Login></Login>
     {/* <Forget></Forget> */}
    </>
  )
}

export default App
