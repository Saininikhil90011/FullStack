import React from 'react'

function ApiData(props) {
    let limit =props["item"]
  return (
    <div>
        <p>{limit["id"]}</p>
        <p>{limit["title"]}</p>
        <p>{limit["price"]}</p>
        <p>{limit["description"]}</p>
        <p>{limit["category"]}</p>
        <img src={limit["image"]} alt="" />

    </div>
  )
}

export default ApiData