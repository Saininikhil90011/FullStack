import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './Components/RegistrationForm'
import Login from './Components/Login'
import Forget from './Components/Forget'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelmetProvider>  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>hello</h1>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/registration' element={<RegistrationForm/>}/>
      <Route path='/forget' element={<Forget/>}/>
    </Routes>
    </BrowserRouter>
    </HelmetProvider>
    
    </>
  )
}

export default App
