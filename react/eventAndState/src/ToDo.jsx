import React, { useState } from 'react'
const initialState = [
    {
        id: 1,
        task: " ",
        completed: false
    }
]
function ToDo() {
    const [todo, setTodo] = useState(initialState)
    const [text,setText] = useState('')
    function addTodo(task) {
        let newTodo =  [...todo]
        let newId;
        if(todo.length > 0) {
           newId= todo[todo.length-1].id+1
        }else{
            newId = 1
        }
        newTodo.push({
            id:newId,
            task:task,
            completed:false
        })
        setTodo(newTodo)  
        setText('')     
        
    }
  return (
    <div className='main-container'>
    <div className='container'>
        <h1>To Do List</h1>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
        <button onClick={() => addTodo(text)}>Add Task</button>
        <button onClick={() => setTodo([])}>Delete All</button>
    <ol>
        {todo.map((item) => {
            return <li key={item.id}>{item.task}
                     <button className='delete' onClick={()=>setTodo(todo.filter((t) => t.id !== item.id))}>Delete</button> <hr  /> 
                    </li>
        })}
        
    </ol>
    </div>
    </div>
  )
}

export default ToDo