import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {
  const [movies, setMovies] = useState([])
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results))
  }, [])

  const turncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
    <div className='w-full text-white h-[550px]'>
      {randomMovie && (
        <>
          <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img
              className='w-full h-full object-cover'
              src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
              alt={randomMovie?.title}
            />
          </div>
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>
              {randomMovie?.title}
            </h1>
            <div className='my-4'>
              <button className='border py-2 px-5 bg-gray-300 border-gray-300 text-black rounded-sm'>
                Play
              </button>
              <button className='border py-2 px-5 border-gray-300 text-white ml-4 rounded-sm'>
                Watch Later
              </button>
            </div>
            <p className='text-gray-400 text-sm'>
              Released: {randomMovie?.release_date}
            </p>
            <p className='w-full md:w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 '>
              {turncateString(randomMovie?.overview, 150)}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Main
