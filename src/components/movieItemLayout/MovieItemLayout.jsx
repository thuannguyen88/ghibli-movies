import React from "react";
import bgWave from "../../assets/wave.svg";
import bgTotoro from "../../assets/bgTotoro.png";
import { Link } from "react-router-dom";
import "./MovieItemLayout.css";

function MovieItemLayout({ movie }) {
  return (
    <div className="movie">
      <div className="movieImageContainer">
        <img src={movie.image} alt={movie.title} className="movieImage" />
        <img src={bgWave} alt="/" className="waveImage" />
      </div>

      <div className="movieDescription">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <Link to={`/${movie.id}`}>
          <button>SEE MORE</button>
        </Link>
      </div>
      <img src={bgTotoro} alt="/" className="bgTotoro" />
    </div>
  );
}

export default MovieItemLayout;
