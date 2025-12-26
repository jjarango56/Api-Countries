import { useLocation } from "react-router-dom";
import { useMemo } from "react";
/**
 * 
 * Retrieve URL parameters
 * @function useQuery
 * @returns 
 */
export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
