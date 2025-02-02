import React, { useContext } from "react";
import Father from "./Father";
import { ThemeContext } from "./Themep";

function Grandfather(props) {
  let age = props["age"];
  //   console.log(age);
  const { theme, toggleTheme, obj, addobj } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={() =>
          addobj({
            Grandfather: "Grandfather",
            father: "Father",
            me: "Me",
            child: "child",
          })
        }
      >
        click
      </button>
      <div>
        <p>{obj["Grandfather"]}</p>
        <p>{age}</p>
      </div>
      <Father count={obj} age="40" />
    </>
  );
}

export default Grandfather;
