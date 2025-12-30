import { useLocation } from "react-router-dom";
import { useMemo } from "react";
/**
 * Custom hook to parse and memoize URL search parameters.
 * * @function useQuery
 * @returns {URLSearchParams} A memoized instance of URLSearchParams.
 */
export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
