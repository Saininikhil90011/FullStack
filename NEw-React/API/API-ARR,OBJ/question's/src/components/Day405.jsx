import React, { useEffect, useState } from 'react'

function Day405() {
    let [todos, settodos] =useState([]);
    useEffect(()=>{
    //
        const apiCall = async()=>
        {
            let response = await fetch("https://jsonplaceholder.typicode.com/todos")
            let responseData = await response.json();
            console.log(responseData);
            
            settodos(responseData);
        }
        apiCall();

    // 
    },[])
  return (
    <>
    {
        todos&&
        todos.map((item,i) => (
            <>
             <p>{todos[i]['userId']}</p>
            <p>{todos[i]['id']}</p>
            <p>{todos[i]['title']}</p>
            <p>{todos[i]['completed']}</p>
            </>
        ))
    }
    
    
    </>
  )
}

export default Day405