import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import Movie from './Movie'

const Row = ({ title, data, rowID }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(data).then((res) => setMovies(res.data.results))
  }, [data])

  const scrollLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const scrollRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  return (
    <>
      <h2 className='text-white md:text-xl p-4 font-bold'>{title}</h2>
      <div className='flex items-center relative group'>
        <MdChevronLeft
          onClick={scrollLeft}
          size={40}
          className='bg-white left-0 rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 z-10 group-hover:block hidden'
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  '
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          size={40}
          className='bg-white right-0 rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 z-10 group-hover:block hidden'
        />
      </div>
    </>
  )
}

export default Row
