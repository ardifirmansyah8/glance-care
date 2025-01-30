import { useEffect, useState } from "react";

import { type Movie, fetchMovies } from "@/apis/moviesApi";

export const useMovies = () => {
  const [raw, setRaw] = useState<Movie[]>([]);

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

  const getMovieDetail = (id: string) => {
    const movie = raw.find((data) => data.id === Number(id));
    return movie;
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    raw,
    getMovieDetail,
  };
};
