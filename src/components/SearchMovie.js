import React, { useState } from 'react';

export default function SearchMovie() {
  //states - input query, movies
  const [query, setQuery] = useState('');

  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8f882c9bcf06cf300c9055ec482c60e2&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className='form' onSubmit={searchMovie}>
        <label htmlFor='query' className='label'>
          Movie Name
        </label>
        <input
          className='input'
          type='text'
          name='query'
          placeholder='i.e. Tenet'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit' value='Submit' className='button'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className='card'>
              <img
                className='card--image'
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + 'poster'}
              />
              <div className='card--content'>
                <h3 className='card--title'>{movie.title}</h3>
                <p className='card-paragraph'>
                  <small> RELEASE DATE: {movie.release_date}</small>
                </p>
                <p className='card-paragraph'>
                  <small>
                    {' '}
                    RATING: <strong>{movie.vote_average}</strong>
                  </small>
                </p>
                <p className='card-desc'>{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
