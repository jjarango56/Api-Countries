import { createBrowserRouter } from "react-router-dom";
import { getData } from "../services/Api";
import App from "../App";
import { LisData } from "../components/ListData";
import { CurrentCountrie } from "../pages/CurrentCountrie";
import { LoadingData } from "../components/LoadingData";
import { FallbackError } from "../components/ErrorBoundary";
/**
 * Application router configuration using React Router's Data API.
 * Defines main routes, data loaders, and error handling.
 * * @type {ReturnType<typeof createBrowserRouter>}
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true },
      {
        path: "ListData",
        element: <LisData />,
        loader: getData,
        HydrateFallback:LoadingData,
        ErrorBoundary:FallbackError,
      },
      {
        path: "CurrentCountrie/:id/:name/:population/:img/:topLevelDomain/:area/:nativeName/:subregion/:borders",
        element: <CurrentCountrie />,
        HydrateFallback:LoadingData,
      },
      {
        path:"*",
        element:<FallbackError error={{ message: "Lo sentimos, la página que buscas no existe." }} 
      resetErrorBoundary={() => window.location.href = "/ListData"}/>
      }
    ],
  },
]);