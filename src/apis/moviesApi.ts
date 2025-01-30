export interface Movies {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
  oscarWins: number;
  oscarNominations: number;
}

export const fetchMovies = async (): Promise<Movies[]> => {
  const response = await fetch("https://www.freetestapi.com/api/v1/movies");
  return await response.json();
};
