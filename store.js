import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './src/features/paginationSlice';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
export default store;
