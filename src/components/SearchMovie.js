import React from 'react';

export default function SearchMovie() {
  return (
    <form className='form'>
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
