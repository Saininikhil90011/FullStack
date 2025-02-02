import React, { useContext } from "react";
import Me from "./Me";
import { ThemeContext } from "./Themep";

function Father(props) {
  let age = props["age"];
//   console.log(age);
const { theme, toggleTheme, obj } = useContext(ThemeContext);
  return (
    <>
    
      <div>
        <p>{obj["father"]}</p>
        <p>{age}</p>
      </div>
      <Me  age ={22} ></Me>
    </>
  );
}

export default Father;
