import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h3>{actor.name}</h3>
          <span>Movies:</span>
          <ul>
            {actor.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
