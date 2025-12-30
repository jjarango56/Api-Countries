import { AiOutlineLoading3Quarters } from "react-icons/ai";

/**
 * Fullscreen loading indicator shown while data is being fetched.
 * @returns {import('react').JSX.Element}
 * @example 
 * <LoadingData/>
 */
export const LoadingData = () => {
  return (
    <div className="flex flex-col bg-main-bg h-screen w-full items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-16 w-16 border-4 text-loading-blue border-text/20 border-t-text">
        <AiOutlineLoading3Quarters />
      </div>
      <p className="text-text animate-pulse">Loading Countries...</p>
    </div>
  );
};
