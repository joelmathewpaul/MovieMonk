import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import LoginSignup from "./login";
import MovieDetails from "./movie-details";
import Search from "./search";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./services/auth-service";
import { saveUser } from "./reducers/user-reducer";
import Profile from "./user-profile";
import User from "./models/user";
import ReadOnlyUserInfo from "./user-profile/read-only-information";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile()
      .then((dbUser) => {
        const modelUser = User.getUserDetails(dbUser);
        dispatch(saveUser(modelUser));
      })
      .catch((error) => {
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
          <Route exact path="/profile/*" element={<Profile />} />
          <Route
            exact
            path="/view-profile/:uid"
            element={<ReadOnlyUserInfo />}
          />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
