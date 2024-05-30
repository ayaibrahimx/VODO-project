import { MoviesContextProvider } from '../context/MoviesContext';
import Movies from '../features/Movies';
function AppLayout() {
  return (
    <MoviesContextProvider>
      <Movies />
    </MoviesContextProvider>
  );
}

export default AppLayout;
