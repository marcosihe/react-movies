import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";


export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const query = useQuery();
  const search = query.get("search");
  console.log(search);

  useEffect(() => {
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";
    get(searchUrl).then(data => {
      setMovies(data.results);
    }); 
  }, [search]);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
