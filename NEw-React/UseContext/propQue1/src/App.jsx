import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Grandfather from "./Components/Grandfather";
import { ThemeContext, ThemeProvider } from "./Components/Themep";

function App() {
  
  return (
    <>
      <ThemeProvider>
      
        <Grandfather age="80"></Grandfather>

      </ThemeProvider>
    </>
  );
}

export default App;
