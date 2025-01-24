import React from "react";
import Child from "./Child";

function Me(props) {
  
  let obj = props["count"];
  let age = props["age"];
//   console.log(age);

  return (
    <>
      <div>
        <p>{obj["me"]}</p>
        <p>{age}</p>
        <Child count={obj} age="0"></Child>
      </div>
    </>
  );
}

export default Me;
