import React, { useContext } from "react";
import { ThemeContext } from "./Themep";

function Child(props) {
  let age = props["age"];
  const { theme, toggleTheme, obj } = useContext(ThemeContext);

  return (
    <>
      <div>
        <p>{obj["child"]}</p>
        <p>{age}</p>
      </div>
    </>
  );
}

export default Child;
