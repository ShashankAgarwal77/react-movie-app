import React from 'react';

export default function SearchMovie() {
  const searchMovie = async (e) => {
    e.preventDefault();
    console.log('submitting');

    const query = 'Tenet';

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8f882c9bcf06cf300c9055ec482c60e2&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className='form' onSubmit={searchMovie}>
      <label htmlFor='query' className='label'>
        Movie Name
      </label>
      <input
        className='input'
        type='text'
        name='query'
        placeholder='i.e. Tenet'
      />
      <button type='submit' value='Submit' className='button'>
        Search
      </button>
    </form>
  );
}
