import { Theme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light"
  );

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <Theme value={{ theme, handleTheme }}>{children}</Theme>;
};
