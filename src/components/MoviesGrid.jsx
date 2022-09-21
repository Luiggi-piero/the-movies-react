import styles from "./MovieGrid.module.css";
import React, { useEffect, useState } from "react";
import { get } from "../http";
import { usePath } from "../hooks/usePath"; // Hook personalizado para analizar la ruta actual - utiliza el hook useLocation
// Componentes
import { MovieCard } from "./MovieCard";
import { Loading } from "./Loading";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   let location = useLocation();
  //   console.log(location.search);
  let query = usePath();
  let search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const path = search ? "/search/movie?query=" + search : "/discover/movie";
    get(path).then((d) => {
      setMovies(d.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
