import React from 'react';
import { useMovies } from '../context/MoviesContext';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

function MoviePoster() {
  const { data } = useMovies();
  const firstMovie = data?.[0];

  console.log(firstMovie);

  return (
    <div className="flex h-full items-center justify-center">
      {firstMovie && (
        <img
          src={`https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`}
          alt={firstMovie.title}
          className="h-full w-auto"
        />
      )}
    </div>
  );
}

export default MoviePoster;
