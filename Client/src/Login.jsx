import React from 'react'
import { Link } from 'react-router-dom'
import image from './Constants/image'


function Login() {
  return (
    <>
      <Link to='/' className='absolute block comfortaa text-4xl p-4'>Trendrent.</Link>
      <div className="grid h-[100vh] w-[100vw] grid-cols-2">
        <div className=""></div>
        <div className="hidden lg:block">
          <img src={image.mainimage} className='object-cover'/>
        </div>
      </div>
    </>
  )
}

export default Login