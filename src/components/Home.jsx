import {useEffect, useState} from "react";
import {fetchMovies} from "../services/api";
import {MovieCard} from "./MovieCard";

export const Home=() => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
};

export default Home;