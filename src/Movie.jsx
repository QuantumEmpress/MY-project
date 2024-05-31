import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=538792e14b4ddac6b715db475fd551f2&query=${query}`)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error("There was an error fetching the movie data!", error);
        });
    }
  }, [query]);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <h1 className="header">CineSearch</h1>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar setQuery={setQuery} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
