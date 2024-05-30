import { useParams } from 'react-router';
import { useQuery } from 'react-query';

const API_KEY = '3a60a40913f34c427412e53b6b852fc3';
const API_URL = 'https://api.themoviedb.org/3';

function Movie() {
  const { movieId } = useParams();

  const { data, isLoading, error } = useQuery(['movie', movieId], async () => {
    const response = await fetch(
      `${API_URL}/movie/${movieId}?api_key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const releaseYear = new Date(data.release_date).getFullYear();
  return (
    <div className="relative">
      <div
        className="m-auto flex h-dvh"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          backgroundSize: 'cover',
          filter: 'blur(10px)',
        }}
      ></div>
      <div className="absolute inset-0 m-auto flex max-h-fit flex-col items-center gap-4 rounded-md bg-stone-900 bg-opacity-70 px-6  py-8 text-slate-100 md:w-1/2 md:flex-row">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt="moviePoster"
            className="h-64 w-48 cursor-pointer rounded-sm md:h-72 md:w-64"
          />
        </div>
        <div className="  flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl font-extrabold text-[#e50914]">
            {data.title}
          </h1>
          <p className="mt-2 max-w-prose text-lg">{data.overview}</p>
          <h2 className="text-md mt-5 font-semibold ">
            Duration: {data.runtime}m ⌛
          </h2>
          <h2 className="text-md font-semibold ">
            IMDB Rating: {data.vote_average.toFixed(1)}⭐
          </h2>
          <h2 className="text-md font-semibold">Released: {releaseYear}</h2>
          <ul className=" flex flex-wrap justify-center md:justify-start">
            {data.genres.map((genre, index) => (
              <li
                key={index}
                className="mb-2 mr-2 mt-2 rounded bg-neutral-950 px-2 py-1"
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Movie;
