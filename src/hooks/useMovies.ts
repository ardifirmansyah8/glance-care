import { useEffect, useState } from "react";

import { type Movies, fetchMovies } from "@/apis/moviesApi";

export const useMovies = () => {
  const [raw, setRaw] = useState<Movies[]>([]);

  const getMovies = async () => {
    const movies = await fetchMovies();
    const data = movies.map((movie) => {
      const awardsText = movie.awards.toLowerCase();
      const wonMatch = awardsText.match(/won (\d+) oscar/);
      const nomMatch = awardsText.match(/nominated for (\d+) oscar/);
      return {
        ...movie,
        oscarWins: wonMatch ? parseInt(wonMatch[1]) : 0,
        oscarNominations: nomMatch ? parseInt(nomMatch[1]) : 0,
      };
    });
    setRaw(data.sort((a, b) => a.year - b.year));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    raw,
  };
};
