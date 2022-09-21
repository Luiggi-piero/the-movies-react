import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../http";
import styles from "./MovieDetails.module.css";
//Componentes
import { Loading } from "../components/Loading";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + id).then((d) => {
      setMovie(d);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <Loading />;

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsWrap}>
      <img className={styles.col} src={imageUrl} alt={movie.original_title} />
      <div className={styles.col}>
        <p className={styles.firstP}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {new Intl.ListFormat("en").format(movie.genres.map((g) => g.name))}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
