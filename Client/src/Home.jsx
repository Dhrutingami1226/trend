import React from 'react'
import image from './Constants/image'
import Adv from './components/Adv'

function Home() {
  return (
    <>
        <div className="flex justify-center items-center h-[65vh] xl:h-[85vh]">
            <img src={image.mainimage} alt="Main" className="object-cover rounded-b-[30px] h-full w-full shadow-lg" />
        </div>
        <Adv />
        <h1 className='text-center comfortaa text-2xl font-semibold'>Products</h1>
        <div className="m-4 grid grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
            <div className="bg-slate-600 h-40 w-full rounded-xl"></div>
            <div className="bg-slate-600 h-40 w-full rounded-xl"></div>
            <div className="bg-slate-600 h-40 w-full rounded-xl"></div>
            <div className="bg-slate-600 h-40 w-full rounded-xl"></div>
            <div className="bg-slate-600 h-40 w-full rounded-xl"></div>
            <div className="bg-slate-600 h-40 w-full rounded-xl"></div>
        </div>

    </>
  )
}

export default Home