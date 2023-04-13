import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='UpComing' data={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' data={requests.requestPopular} />
      <Row rowID='3' title='Trending' data={requests.requestTrending} />
      <Row rowID='4' title='Top Rated' data={requests.requestTopRated} />
      <Row rowID='5' title='Horror' data={requests.requestHorror} />
    </>
  )
}

export default Home
