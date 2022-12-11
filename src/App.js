import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import LoginSignup from './login';
import MovieDetails from './movie-details';
import Search from './search';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getProfile } from "./services/auth-service";
import { saveUser } from './reducers/user-reducer';
import UserInfo from "./user-profile";
import EditProfile from "./user-profile/edit-profile";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile().then(dbUser => {
      dispatch(saveUser(dbUser));
    }).catch(error => {
      //user is not logged in
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/movie/:id/:title" element={<MovieDetails />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/profile" element={<UserInfo />} />
          <Route exact path="/edit-profile" element={<EditProfile />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
