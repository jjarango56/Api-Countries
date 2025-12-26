import { Theme } from "../context/ThemeContext";
import { use } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export function ToggleTheme() {
  const { theme, handleTheme } = use(Theme);

  return (
    <>
      <button className="text-texto flex items-center gap-2 " onClick={handleTheme}>
        {theme === "light" ? (<><CiDark /> Dark mode</> ):( <><CiLight /> Light mode</>)}
      </button>
    </>
  );
}
