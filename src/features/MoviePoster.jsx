import { useMovies } from '../context/MoviesContext';

function MoviePoster() {
  const { data } = useMovies();
  const firstMovie = data?.results?.[0]; // Assuming `results` is the key containing movie data

  console.log(firstMovie);

  return (
    <div className="flex h-full items-center justify-center">
      {/* Render the first movie data */}
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
