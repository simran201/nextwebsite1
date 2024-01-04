"use client";

import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const switchDark = () => {
    setTheme("dark");
  };
  const switchLight = () => {
    setTheme("light");
  };
  return (
    <>
      <ThemeContext.Provider value={{ switchDark, switchLight, theme }}>
        <div className={`${theme} anim`}>{children}</div>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
