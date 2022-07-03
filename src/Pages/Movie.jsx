import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://ghibliapi.herokuapp.com/films";

function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const singleMovie = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    const singleMovie = data.find((movies) => movies.id === movieId);
    setMovie(singleMovie);
    console.log(singleMovie);
  };

  useEffect(() => {
    singleMovie();
  }, []);

  return (
    <div className="singleMovieContainer">
      <img src={movie.image} alt="/"></img>
      <h1>{movie.title}</h1>
      <h3>Director: {movie.director}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <Link to="/">
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default Movie;
