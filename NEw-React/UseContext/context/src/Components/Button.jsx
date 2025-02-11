import React ,{useContext}from 'react'
import { counterContext } from './context/context'

function Button() {
    const value = useContext(counterContext)
  return (
    <div>
<button onClick={() => value.etCount((count) => count + 1)}><span><Components1/></span> I am a Button</button>

    </div>
  )
}

export default Button