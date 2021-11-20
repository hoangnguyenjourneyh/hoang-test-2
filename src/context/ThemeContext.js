import React, { useState } from "react";

export const ThemeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
    {props.children}
  </ThemeContext.Provider>
}