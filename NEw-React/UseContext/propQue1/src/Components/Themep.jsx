import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  let [obj, setobj] = useState({
    Grandfather: "",
    father: "",
    me: "",
    child: "",
  });
  const addobj = (para) => {
    setobj(para)
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, obj, addobj }}>
      {children}
    </ThemeContext.Provider>
  );
};
