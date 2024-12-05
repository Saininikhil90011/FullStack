import { useState } from 'react'

import './App.css'
import UserForm from './userForm/UserForm'
import DeductionForm1 from './deductions/DeductionForm.'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserForm/>
    {/* <DeductionForm1/> */}
    
    </>
  )
}

export default App
