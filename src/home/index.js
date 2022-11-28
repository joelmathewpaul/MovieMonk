import { Route, Routes } from "react-router";
import Header from "../header";
import Navigation from "../navigation";
import MovieList from "../movie";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container bg-white rounded-3">
        <div className="row">
          <div className="col-md-3">
            <Navigation />
          </div>
          <div className="col-md-9">
              {/*calling the movie list here*/}
              <MovieList />
            {/* <Routes>
              <Route index
                element={<Assignment6 />} />
            </Routes> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;