import { Link } from 'react-router-dom';
import { useMovies } from '../context/MoviesContext';
import Pagination from './Pagination';

function Movies() {
  const { data } = useMovies();
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {data.results.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="moviePoster"
              className="h-72 w-64 cursor-pointer rounded-sm"
            />
          </Link>
        </div>
      ))}
      <Pagination />
    </div>
  );
}

export default Movies;
