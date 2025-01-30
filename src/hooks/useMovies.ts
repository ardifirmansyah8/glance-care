import { useEffect, useState } from "react"

import { type Movies,fetchMovies } from "@/apis/moviesApi"

export const useMovies = () => {
  const [raw, setRaw] = useState<Movies[]>([])

  const getMovies = async () => {
    const movies = await fetchMovies();
    console.log(movies)
  }
  
  useEffect(() => {
    getMovies();
  }, [])

  return {
    raw
  }
}