import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, logIn } = UserAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      // console.log(error)
      setError(error.message)
    }
  }

  return (
    <>
      <div className='w-full h-screen '>
        <img
          className='hidden sm:block  absolute w-full h-full object-cover'
          src='/img/login.jpg'
          alt='/'
        />
        <div className='fixed left-0 top-0 bg-black/60 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] bg-black/75 h-[600px] mx-auto text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h2 className='text-3xl font-bold'>Sign In</h2>
              {error ? (
                <p className='py-3 bg-red-500 rounded mt-4 p-3'>{error}</p>
              ) : (
                ''
              )}
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoCapitalize='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoCapitalize='current-password'
                />
                <button className='bg-red-600 font-bold py-3 my-6 rounded'>
                  Sign In
                </button>

                <div className='flex justify-between items-center text-gray-600 text-sm'>
                  <p>
                    <input type='checkbox' className='mr-2' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className='my-8 '>
                  <span className='text-gray-600 mr-3'>New to Netflix?</span>
                  <Link to={'/signup'}>Sign up.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
