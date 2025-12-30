import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * @template {object} T
 * @typedef {Object} UseFilterData
 * @property {string} query - Current search input value.
 * @property {T[]} data - Raw data array from the router loader.
 * @property {Function} setQuery - Updates the name search filter.
 * @property {string} queryRegion - Currently selected region.
 * @property {Function} setQueryRegion - Updates the region filter.
 * @property {Object[]} newData - Data filtered by name or region.
 * @property {Object[]} filterRegion - List of unique region objects for dropdowns.
 * @property {Function} navigate - React Router navigation function.
 */

/**
 * @template {object} T
 * Custom hook to handle data filtering by name and region.
 * @returns {UseFilterData<T>} Filter states, handlers, and filtered datasets.
 * @example
 * return {
    query,
    data,
    navigate,
    setQueryRegion,
    queryRegion,
    newData,
    setQuery,
    filterRegion
  };
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

  const filterRegion = data.filter(
    (item, index, self) =>
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
    filterRegion,
  };
};
