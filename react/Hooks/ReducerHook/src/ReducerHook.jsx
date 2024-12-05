import React, { useReducer, useState } from "react";
const initialState = [
  {
    id: 1,
    task: "hello",
    isComplete: false,
  },
];
function todoReducer(state, action) {
  if (action.type === "add") {
    let newState = [...state];
    let newId = state.length > 0 ? state[state.length - 1].id + 1 : 1;
    newState.push({ id: newId, task: action.payload, isComplete: false });
    return newState;
  } else if (action.type === "delete") {
    return state.filter((todo) => todo.id !== action.payload);
  }
  return state;
  
  
}
function ReducerHook() {
  const [text, settext] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => settext(e.target.value)}
        value={text}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: text });
          settext("");
        }}
      >
        add
      </button>
      <button onClick={
        () => {
          dispatch({ type: "delete", payload: text });
          settext("");
        }
      }>
        Delete
      </button>
      <ol>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button
              onClick={() => dispatch({ type: "delete", payload: todo.id })}
            >
              delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ReducerHook;
