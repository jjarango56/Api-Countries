import { ToggleTheme } from "./ToggleTheme";
const Nav = ({ title }) => {
  return (
    <header className="grid grid-cols-2 justify-items-center justify-between bg-header-bg p-5 shadow">
      <h1 className="text-xl font-bold">{title}</h1>
      <ToggleTheme />
    </header>
  );
};

export const NavBar = () => {
  return <Nav title="Where in the world?" />;
};
