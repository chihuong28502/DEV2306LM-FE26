import React, { createContext, useState } from "react";
import Content from "./Content";
export const ThemeContext = createContext(); // ngữ cảnh
function ContextAndUseContext() {
  const [theme, setTheme] = useState("text-dark");
  const toggleTheme = () => {
    setTheme(theme === "text-dark" ? "text-light" : "text-dark");
  };
  return (
    <div className="alert alert-dark">
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 50 }}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Content />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default ContextAndUseContext;
