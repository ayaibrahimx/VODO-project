import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Movie from './features/Movie';
import Header from './ui/Header';
import AppLayout from './ui/AppLayout';
import { Provider } from 'react-redux';
import store from '../store';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <AppLayout /> },
    { path: '/movie/:movieId', element: <Movie /> },
  ]);

  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="h-auto flex-1 bg-zinc-900 bg-cover p-4">
          <RouterProvider router={router}>
            <AppLayout />
          </RouterProvider>
        </div>
      </Provider>
    </>
  );
}

export default App;
