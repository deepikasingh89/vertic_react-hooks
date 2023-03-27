import React, { useState } from "react";

const { Provider, Consumer } = React.createContext(); //return an object

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Provider value={{ theme, toggleTheme }}></Provider>
      {props.children}
    </div>
  );
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
