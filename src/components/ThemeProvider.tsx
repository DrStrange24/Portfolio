import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

type ResolvedTheme = "light" | "dark";
type Theme = ResolvedTheme | "system";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
  resolvedTheme: ResolvedTheme;
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
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  const applyTheme = (theme: Theme) => {
    if (theme === "system") {
      // Follow system preference if theme is set to "system"
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const currentTheme = systemPrefersDark ? "dark" : "light";

      setResolvedTheme(currentTheme);

      document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      setResolvedTheme(theme);
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
    <ThemeContext.Provider value={{ theme, toggleTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
