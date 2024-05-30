import React from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../context/MoviesContext';
import Pagination from './Pagination';

interface Movie {
  id: number;
  poster_path: string;
}

interface MoviesData {
  results: Movie[];
}

function Movies(): JSX.Element {
  const { data } = useMovies();

  return (
    <div className="  mt-12  flex flex-wrap justify-center gap-4 p-6">
      {data.results.map((movie: Movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="moviePoster"
              className="h-72 w-64 cursor-pointer rounded-sm"
              loading="lazy"
            />
          </Link>
        </div>
      ))}
      <Pagination />
    </div>
  );
}

export default Movies;
