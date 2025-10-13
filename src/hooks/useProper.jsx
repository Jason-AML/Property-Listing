import { useState, useMemo } from "react";
import { useFetch } from "./useFetch";

const DATA_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json";

export const useProper = () => {
  const { data, loading, error } = useFetch(DATA_URL);
  const [selectedCountry, setSelectedCountry] = useState("ALL");

  const countries = useMemo(() => {
    if (!data?.length) return [];
    const unique = new Set(data.map((item) => item.location));
    return ["ALL", ...Array.from(unique)];
  }, [data]);

  const filter = useMemo(() => {
    if (!data) return [];
    return selectedCountry === "ALL"
      ? data
      : data.filter((item) => item.location === selectedCountry);
  }, [data, selectedCountry]);

  return {
    loading,
    error,
    countries,
    filter,
    selectedCountry,
    setSelectedCountry,
  };
};
