import React from 'react'

function Child(props) {
    let obj = props["count"]
    let age = props["age"]

  return (
    <>
    <div>
     <p>{obj["child"]}</p>
     <p>{age}</p>
    </div>
    </>
  )
}

export default Child