import React from 'react'

function Events() {
    function handleClick(){
        alert("hello")
    }
    function showAlert(msg){
        alert(msg)
    }
  return (
    <div>
        {/* <button onClick={()=>alert("hello")}>click</button> */}
        <button onClick={handleClick}>click</button>
        <button onClick={()=>showAlert('ksjfkdjf')}>click</button>
    </div>
  )
}

export default Events