import React from 'react'

function Que01(){

    //
    let obj = {"widget": {
            "debug": "on",
            "window": {
                "height": 500
            },
            "image": { 
                "src": "Images/Sun.png",
            },
            "text": {
                "data": "Click Here",
                "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
            }
        }}
    //
  return (
    <>
        <p>{obj["widget"]['debug']}</p>
        <p>{obj["widget"]['window']['height']}</p>
        <p>{obj["widget"]['image']['src']}</p>
        <p>{obj["widget"]['text']['data']}</p>
        <p>{obj["widget"]['text']['onMouseUp']}</p>
    </>
  )
}

export default Que01