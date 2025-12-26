import { AiOutlineLoading3Quarters } from "react-icons/ai";
export const LoadingData = () => {
  return (
    <div className="flex flex-col bg-main-bg h-screen w-full items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-16 w-16 border-4 text-blue-600 border-texto/20 border-t-texto" >
        <AiOutlineLoading3Quarters />
      </div>
      <p className="text-texto animate-pulse">Loading Countries...</p>
    </div>
  );
};
