import React, { useContext } from "react";
import Child from "./Child";
import { ThemeContext } from "./Themep";

function Me(props) {
  let age = props["age"];
//   console.log(age);
const { theme, toggleTheme, obj } = useContext(ThemeContext);
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
