import React, { createContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) return savedTheme;

    // Default to system theme if no saved theme
    return "system";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const applyTheme = (theme: Theme) => {
    if (theme === "system") {
      // Follow system preference if theme is set to "system"
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        systemPrefersDark ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme); // Save user choice
  };

  useEffect(() => {
    applyTheme(theme);

    // Add listener for system theme changes if "system" is selected
    const systemThemeListener = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.setAttribute(
          "data-theme",
          e.matches ? "dark" : "light"
        );
      }
    };
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", systemThemeListener);

    return () => matchMedia.removeEventListener("change", systemThemeListener);
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
