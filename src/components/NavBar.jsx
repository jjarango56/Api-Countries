import { ToggleTheme } from "./ToggleTheme";
/**
 * Navigation bar component that displays the application title and a theme toggle.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The main title or brand name to be displayed in the header.
 * @returns {import('react')JSX.Element} A responsive header containing the title and the ToggleTheme component.
 *
 * @example
 * <NavBar title="Where in the world?" />
 */

export const NavBar = ({ title }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10 md:px-30 bg-header-bg p-5 shadow gap-3 sm:gap-0">
      <h1 className="text-lg sm:text-xl font-bold">{title}</h1>
      <ToggleTheme />
    </header>
  );
};


