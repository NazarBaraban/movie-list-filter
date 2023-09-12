import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filtredMovies(movies, filtredField) {
  const newMovies = [...movies];
  const filtredOnLowerCase = filtredField.toLowerCase().trim();

  if (filtredField) {
    return newMovies.filter(
      movie => movie.title.toLowerCase().trim().includes(filtredOnLowerCase)
      || movie.description.toLowerCase().trim().includes(filtredOnLowerCase),
    );
  }

  return newMovies;
}

export const App = () => {
  const [selected, setSelected] = useState('');
  const visibleMovies = filtredMovies(moviesFromServer, selected);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={enter => setSelected(enter.target.value)}
                value={selected}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
