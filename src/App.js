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
import {Provider} from "react-redux";
import User from './user/index';
import EditProfile from './user/edit-profile';
const store = configureStore(
    {reducer: {user: userReducer}});
function App() {
  return (
      <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/movie/:id/:title" element={<MovieDetails />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/profile" element={<User />} />
          {/*added route to profile page*/}
          {/*<Route exact path="/edit-profile" element={<EditProfile />} />*/}
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
      </Provider>
  );
}

export default App;
