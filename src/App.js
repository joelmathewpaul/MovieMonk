import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import LoginSignup from './login';
import MovieDetails from './movie-details';
import Search from './search';
import userReducer
  from "./reducers/user-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
  { reducer: { user: userReducer } });
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
