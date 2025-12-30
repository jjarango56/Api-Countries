import { TbError404Off } from "react-icons/tb";

/**
 * Error fallback UI for route or component errors.
 * @param {{error: Error, resetErrorBoundary: Function}} props - Error info and reset handler.
 * @returns {import('react').JSX.Element}
 */
export const FallbackError = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-100 w-full flex flex-col items-center justify-center p-6 text-center bg-main-bg rounded-lg shadow-md h-screen ">
      <TbError404Off />
      <div className="bg-error-bg p-4 rounded-full mb-4">
        <svg
          className="w-12 h-12 text-error-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-text mb-2">
        ¡Ups! Algo salió mal
      </h2>
      <p className="text-text opacity-75 mb-6 max-w-md">
        No pudimos cargar la información de los países. Error:
        <span className="font-mono text-error-message block mt-1">
          {error.message}
        </span>
      </p>

      <button
        onClick={resetErrorBoundary}
        className="px-6 py-2 bg-button-primary hover:bg-button-primary-hover text-white font-semibold rounded-md transition-colors shadow-lg"
      >
        Reintentar cargar
      </button>
    </div>
  );
};
