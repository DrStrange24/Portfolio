import React, { createContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(systemPrefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      theme === "light" ? "#ffffff" : "#121212"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      theme === "light" ? "#333333" : "#ffffff"
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
