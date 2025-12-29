import { ToggleTheme } from "./ToggleTheme";
const Nav = ({ title }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10 md:px-30 bg-header-bg p-5 shadow gap-3 sm:gap-0">
      <h1 className="text-lg sm:text-xl font-bold">{title}</h1>
      <ToggleTheme />
    </header>
  );
};

export const NavBar = () => {
  return <Nav title="Where in the world?" />;
};
