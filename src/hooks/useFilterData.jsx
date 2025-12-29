import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
/**
 * Custom hook to handle data filtering by name and region.
 * * @returns {Object} Filter states, handlers, and the filtered data sets.
 * @property {string} query - Current search input value.
 * @property {Array} data - Raw data from the router loader.
 * @property {Function} setQuery - Updates the name search filter.
 * @property {string} queryRegion - Currently selected region.
 * @property {Function} setQueryRegion - Updates the region filter.
 * @property {Array} newData - Data filtered by name or region.
 * @property {Array} filterRegion - List of unique regions for dropdowns.
 * @property {Function} navigate - React Router navigation instance.
 */
export const useFilterData = () => {
  const data = useLoaderData() || [];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [queryRegion, setQueryRegion] = useState("");

  const newData = data.filter((data) => {
    const nameLower = data.name.toLowerCase();
    const queryLower = query.toLowerCase();
    const regionLower = data.region.toLowerCase();
    const selectLower = queryRegion.toLowerCase();
    return query
      ? nameLower.includes(queryLower)
      : regionLower.includes(selectLower);
  });

  const filterRegion = data.filter((item, index, self) => 
  index === self.findIndex((t) => t.region === item.region)
);

  return {
    query,
    data,
    navigate,
    setQueryRegion,
    queryRegion,
    newData,
    setQuery,
    filterRegion
  };
};
