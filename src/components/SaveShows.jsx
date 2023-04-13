import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

const SaveShows = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  const scrollLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const scrollRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
      const shows = doc.data()?.saveShows
      setMovies(shows)
    })
  }, [user?.email])

  //   console.log(movies)

  const movieRef = doc(db, 'users', `${user?.email}`)

  const removeShow = async (id) => {
    try {
      const result = movies.filter((item) => item.id !== id)
      await updateDoc(movieRef, {
        saveShows: result,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2 className='text-white md:text-xl p-4 font-bold'>My Shows</h2>
      <div className='flex items-center relative group'>
        <MdChevronLeft
          onClick={scrollLeft}
          size={40}
          className='bg-white left-0 rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 z-10 group-hover:block hidden text-black'
        />
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  '
        >
          {movies &&
            movies.map((item, id) => (
              <div
                key={id}
                className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '
              >
                <img
                  className='w-full h-auto  block select-none '
                  src={`https://image.tmdb.org/t/p/w500/${item.img}`}
                  alt={item.title}
                />
                <div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
                  <p className='whitespace-normal text-xs md:text-sm font-bold h-full text-center flex items-center justify-center '>
                    {item.title}
                  </p>
                  <p
                    className='absolute top-4 right-4 text-gray-300'
                    onClick={() => removeShow(item.id)}
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          size={40}
          className='bg-white right-0 rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 z-10 group-hover:block hidden text-black'
        />
      </div>
    </>
  )
}

export default SaveShows
