import React from 'react'

function ApiData(props) {
    let obj = props["item"]
    // console.log(props);
    
  return (
    <>
            <p>{obj["id"]}</p>
            <p>{obj["postId"]}</p>
            <p>{obj["name"]}</p>
            <p>{obj["email"]}</p>
            <p>{obj["body"]}</p>
            
    </>
  )
}

export default ApiData