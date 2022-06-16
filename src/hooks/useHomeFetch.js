import { useState, useEffect } from "react";
// API
import API from "../API";

const intitialState = {
  page: 0,
  result: [],
  total_pages: 0,
  total_result: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(intitialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.result],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  // intitial render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return { state, loading, error };
};
