import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  return (
    <div className='p-4 m-4 bg-black bg-opacity-90'>
      <div>
      {movieNames.map((name, index) => (
          <MovieList key={index} title={name} movies={movieResults[index]} />
      ))}
      </div>
    </div>
  )

}

export default GptSuggestions
