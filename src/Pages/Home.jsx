import { useState, useEffect } from "react";
import MovieItem from "../components/movieItemLayout/MovieItemLayout";

import "./Home.css";

const API_URL = "https://ghibliapi.herokuapp.com/films";

function Home() {
  const [movies, setMovies] = useState([]);
  const resultLimit = 5;

  const allMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data);
  };

  useEffect(() => {
    allMovies();
  }, []);

  return (
    <div className="home">
      <h1>GhibliMovies</h1>

      {movies?.length > 0 ? (
        <div className="movieContainer">
          {movies.slice(0, resultLimit).map((movie) => {
            return (
              <div key={movie.id}>
                <MovieItem movie={movie} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="loading">
          <h3>....loading movies</h3>
        </div>
      )}

      <div className="movieContainer"></div>
    </div>
  );
}

export default Home;
