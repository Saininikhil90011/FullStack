import React from "react";
import Me from "./Me";

function Father(props) {
  let obj = props["count"];
  let age = props["age"];
  let childename = props["childename"];
//   console.log(age);

  return (
    <>
      <div>
        <p>{obj["father"]}</p>
        <p>{age}</p>
        <p>{childename}</p>
      </div>
      <Me count={obj} age ={22} ></Me>
    </>
  );
}

export default Father;
