import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Spinner from '../ui/Spinner';

interface Movie {
  id: number;
  title: string;
  overview: string;
}

interface MoviesContextType {
  data?: Movie[];
}

const API_KEY = '3a60a40913f34c427412e53b6b852fc3';
const API_URL = 'https://api.themoviedb.org/3';

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

interface MoviesContextProviderProps {
  children: ReactNode;
}

export const MoviesContextProvider: React.FC<MoviesContextProviderProps> = ({
  children,
}) => {
  const { currentPage } = useSelector((state: any) => state.pagination);

  const { data, isLoading, error, refetch } = useQuery<Movie[]>(
    ['movies', currentPage],
    async () => {
      const response = await fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}&include_adult=false&without_genres=99,10755&vote_count.gte=200}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
  );

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <MoviesContext.Provider value={{ data }}>{children}</MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesContextProvider');
  }
  return context;
};
