import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title} ({movie.release_date && movie.release_date.slice(0, 4)})</h3>
      {hover && (
        <div className="movie-overview">
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
