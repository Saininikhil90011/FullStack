import React, { useState } from 'react'

function State() {
    const [count, setCount]=useState(0)
    //controlled component and uncontrolled component
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click</button>
        {count}
        <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}

export default State