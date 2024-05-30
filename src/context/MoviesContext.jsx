import { createContext, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const API_KEY = '3a60a40913f34c427412e53b6b852fc3';
const API_URL = 'https://api.themoviedb.org/3';

const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const { currentPage } = useSelector((state) => state.pagination);

  const { data, isLoading, error, refetch } = useQuery(
    ['movies', currentPage],
    async () => {
      const response = await fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}&include_adult=false&without_genres=99,10755&vote_count.gte=200}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const movies = await response.json();
      console.log(movies);
      return movies;
    },
  );

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <MoviesContext.Provider value={{ data }}>{children}</MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
