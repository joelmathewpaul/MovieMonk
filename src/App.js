import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import LoginSignup from './login';
import MovieDetails from './movie-details';
import Search from './search';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/movie/:id/:title" element={<MovieDetails />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
