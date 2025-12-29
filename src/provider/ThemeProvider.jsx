import { Theme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
/**
 * provider of context for the handle theme (light/dark).
 * * @component
 * @param {Object} props - component properties
 * @param {React.ReactNode} props.children - Child components that will have access to the context.
 * * @returns {JSX.Element} The context provider enveloping the children.
 */
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
