import React from "react";
import { Link, useParams } from "react-router-dom";

function Movie() {
  let { movieId } = useParams();

  return (
    <div>
      this is a movie page
      <h2>{movieId}</h2>
    </div>
  );
}

export default Movie;
