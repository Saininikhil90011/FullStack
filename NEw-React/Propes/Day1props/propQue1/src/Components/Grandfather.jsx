import React from "react";
import Father from "./Father";

function Grandfather(props) {
  let obj = props["count"];
  let age = props["age"];
//   console.log(age);

  return (
    <>
      <div>
        <p>{obj["Grandfather"]}</p>
        <p>{age}</p>
      </div>
      <Father count={obj} age="40" childename ="Vishal saini"/>
    </>
  );
}

export default Grandfather;
