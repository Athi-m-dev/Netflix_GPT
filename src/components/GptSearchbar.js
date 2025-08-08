import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import { useRef } from 'react'
import { geminiai } from '../utils/gemini'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
import { useDispatch } from 'react-redux'
const GptSearchbar = () => {
  const lankey = useSelector((store) => store.language?.lang);
  const searchText = useRef(null)
  const dispatch = useDispatch();
  const fetchmovies = async (name) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
    const json = await data.json();
    return json.results;
  }

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a recommendation system and suggest 5 titles including both movies and web series based on the following query: " +
      searchText.current.value +
      ". Include at least 2 web series and 2 movies. Only return the names, comma-separated, like this: strangerthings, quiteplace, Interstellar, Inception, The Matrix. No explanations or extra text.";


    const completion = await geminiai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });
    const movieNames = completion.text.split(",");

    const moviePromises = movieNames.map((name) => fetchmovies(name));
    const movies = await Promise.all(moviePromises);
    console.log(movies)
    dispatch(addGptMovieResult({ Allmovies: movies, movieNames: movieNames }));
  }



  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 flex bg-black p-4' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[lankey]?.gptSearchPlaceholder}
          className='items-start flex-1  h-[50px]'
        />
        <button className='bg-red-600 h-[50px] mx-3 w-[100px]' onClick={handleGptSearch}>
          {lang[lankey]?.search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchbar
