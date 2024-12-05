import React from 'react'
import { useState } from 'react'

function Forms() {
    const [name,setName]=useState('')

  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        {name}
    </div>
  )
}

export default Forms