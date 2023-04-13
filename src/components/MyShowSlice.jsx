import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'

const MyShowSlice = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  }

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
      const shows = doc.data()?.saveShows
      setMovies(shows)
    })
  }, [user?.email])

  return (
    <div className='text-whit w-full'>
      <Slider {...settings}>
        {movies &&
          movies.map((item) => (
            <div>
              <img
                className='w-full h-[170px]    object-cover'
                src={`https://image.tmdb.org/t/p/w500/${item.img}`}
                alt={item.title}
              />
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default MyShowSlice
