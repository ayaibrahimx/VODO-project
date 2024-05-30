import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './ui/Header';
import Movie from './features/Movie';
import Footer from './ui/Footer';
import Movies from './features/Movies';
import { MoviesContextProvider } from './context/MoviesContext';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Movies /> },
    { path: '/movie/:movieId', element: <Movie /> },
  ]);

  return (
    <>
      <Provider store={store}>
        <MoviesContextProvider>
          <Header />
          <div className="relative h-auto flex-1 flex-col bg-zinc-900 bg-cover ">
            <RouterProvider router={router}></RouterProvider>
            <Footer />
          </div>
        </MoviesContextProvider>
      </Provider>
    </>
  );
}

export default App;
