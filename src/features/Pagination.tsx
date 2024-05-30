import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from './paginationSlice';
import { useMovies } from '../context/MoviesContext';
import { RootState } from '../redux/store';

function Pagination(): JSX.Element {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.pagination);
  const { data } = useMovies();
  console.log(data);

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  return (
    <span className="mx-auto mb-8 flex h-12 w-60 justify-center">
      <button
        onClick={handlePrevPage}
        className="my-auto rounded-full bg-black bg-opacity-50 px-4 py-4 text-[#e50914] hover:bg-opacity-100"
      >
        <BsArrowLeft />
      </button>
      <div className="my-auto w-full text-center text-slate-100">
        Page {currentPage} of {data?.total_pages}
      </div>
      <button
        onClick={handleNextPage}
        className="my-auto rounded-full bg-black bg-opacity-50 px-4 py-4 text-[#e50914] hover:bg-opacity-100"
      >
        <BsArrowRight />
      </button>
    </span>
  );
}

export default Pagination;
