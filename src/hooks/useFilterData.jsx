import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
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

  return {
    query,
    data,
    navigate,
    setQueryRegion,
    queryRegion,
    newData,
    setQuery,
  };
};
