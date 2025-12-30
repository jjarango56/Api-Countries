import { createContext } from "react";
/**
 * @typedef {"light" | "dark"} ThemeMode
 */

/**
 * Context from React to handle theme (claro/oscuro).
 * * default is "light".
 * * @example
 * const theme = useContext(Theme);
 * * @type {import("react").Context<ThemeMode>}
 */
export const Theme = createContext("light");
