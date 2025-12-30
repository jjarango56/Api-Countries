import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

/**
 * 
 * @return {import('react')JSX.Element}
 * @example
 * <App/> 
 */
function App() {
  return (
    <main>
      <NavBar title="Where in the world ?" />
      <Outlet />
    </main>
  );
}
export default App;
