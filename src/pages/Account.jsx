import React from 'react'
import SaveShows from '../components/SaveShows'

const Account = () => {
	return (
		<div className='w-full text-white'>
			<img
				className=' w-full h-[400px] object-cover'
				src='/img/login.jpg'
				alt='/'
			/>
			<div className='bg-black/60 fixed top-0 left-0 h-[550px] w-full'></div>
			<div className='absolute top-[20%] p-4 md:p-8 w-full '>
				<h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
				{/* <div className='mt-4 '>
          <MyShowSlice />
        </div> */}
			</div>

			<SaveShows />
		</div>
	)
}

export default Account
