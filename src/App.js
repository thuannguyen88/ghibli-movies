import { useState, useEffect } from "react";
import MovieItem from "./components/movieItemLayout/MovieItemLayout";
import "./App.css";
import bgTotoro from "./assets/bgTotoro.png";

const API_URL = "https://ghibliapi.herokuapp.com/films";

function App() {
  const [movies, setMovies] = useState([]);
  const [resultLimit, setResultLimit] = useState(5);

  const allMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data);
  };

  useEffect(() => {
    allMovies();
  }, []);

  

  console.log(movies[0]);
  return (
    <div className="app">
      <h1>GhibliMovies</h1>

      {movies?.length > 0 ? (
        <div className="movieContainer">
          {movies.slice(0, resultLimit).map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="loading">
          <h3>....loading movies</h3>
        </div>
      )}

      <div className="movieContainer">
        {/* <MovieItem movies={movies[0]} /> */}
      </div>
    </div>
  );
}

export default App;
