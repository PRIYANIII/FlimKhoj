import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movie.css';

const Watch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedMovieId, setExpandedMovieId] = useState(null);
  const [timeframe, setTimeframe] = useState('day'); // Default to 'day'

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/${timeframe}`,
          {
            params: {
              api_key: 'e54b726903e121da2e5ac91781441366',
              language: 'en-US',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [timeframe]); // Fetch movies when timeframe changes

  const toggleDescription = (movieId) => {
    setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
  };

  return (
    <div>
      <h1 className="page-title">Trending Movies & Shows</h1>

      {/* Dropdown to Select Timeframe */}
      <div className="dropdown">
        <label htmlFor="timeframe">Trending: </label>
        <select id="timeframe" value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          <option value="day">Today</option>
          <option value="week">This Week</option>
        </select>
      </div>

      {loading ? (
      
          <span class="loader">loading</span>
       
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="movie-wrapper">
          {movies.map((movie) => (
            <div key={movie.id} className="movie">
              <img 
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                alt={movie.title || movie.name} 
              />
              <h2>{movie.title || movie.name}</h2>
              <p className='rating'>Rating: {movie.vote_average}</p>
              {expandedMovieId === movie.id ? (
                <p>{movie.overview}</p>
              ) : (
                <p>{movie.overview.substring(0, 150)}...</p>
              )}
              <button onClick={() => toggleDescription(movie.id)} className='read-more'>
                {expandedMovieId === movie.id ? 'Show Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Watch;
