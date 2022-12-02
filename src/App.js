import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import LoginSignup from './login';
import MovieDetails from './movie-details';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/movie/:id/:title" element={<MovieDetails />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
