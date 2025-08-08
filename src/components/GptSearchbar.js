import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
const GptSearchbar = () => {
  const lankey = useSelector((store) => store.language?.lang); // fallback to "en" if undefined
  console.log("Current Language:", lankey);
  return (
    <div className='pt-[10%] flex justify-center '>
      <div className='w-1/2 flex bg-black p-4'>
        <input
          type="text"
          placeholder={lang[lankey]?.gptSearchPlaceholder}
          className='items-start flex-1  h-[50px]'
        />
        <button className='bg-red-600 h-[50px] mx-3 w-[100px]'>
          {lang[lankey]?.search}
        </button>
      </div>
    </div>
  )
}   

export default GptSearchbar
