import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import "./Movie.css";

const API_URL = "https://ghibliapi.herokuapp.com/films";

function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  // const singleMovie = async () => {
  //   const response = await fetch(`${API_URL}`);
  //   const data = await response.json();
  //   const singleMovie = data.find((movies) => movies.id === movieId);
  //   setMovie(singleMovie);
  //   // console.log(singleMovie);
  // };

  useEffect(() => {
    const singleMovie = async () => {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      const singleMovie = data.find((movies) => movies.id === movieId);
      setMovie(singleMovie);
      // console.log(singleMovie);
    };
    
    singleMovie();
  }, [movieId]);

  return (
    <div className="container">
      <img src={movie?.image} alt="/" className="movieImage"></img>
      <h1>{movie?.title}</h1>
      <h3>Director: {movie?.director}</h3>
      <h3>Release Date: {movie?.release_date}</h3>
      <Link to="/">
        <Button text={`BACK`} />
      </Link>
    </div>
  );
}

export default Movie;
