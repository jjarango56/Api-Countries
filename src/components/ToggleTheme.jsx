import { Theme } from "../context/ThemeContext";
import { use } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
/**
 * A button component that toggles the application's color theme between light and dark modes.
 * It consumes the ThemeContext using the React 'use' hook to access and update the current state.
 * @returns {import('react')JSX.Element} A button displaying the current theme icon and label.
 * @example 
 * <ToggleTheme/>
 */

export function ToggleTheme() {
  const { theme, handleTheme } = use(Theme);

  return (
    <>
      <button
        type="button"
        className="text-text flex items-center gap-2 "
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <>
            <CiDark /> Dark mode
          </>
        ) : (
          <>
            <CiLight /> Light mode
          </>
        )}
      </button>
    </>
  );
}
