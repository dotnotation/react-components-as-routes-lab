import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
          <span>Runtime: {movie.time}</span>
          <ul>
            {movie.genres.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
