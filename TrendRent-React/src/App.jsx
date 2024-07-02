import { useState } from 'react'
import '../input.css'
import mainimage from '../src/Assets/Images/mainimage.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex absolute items-center p-2 lg:gap-24 gap-9 pr-8 top-4 left-4">
        <p class="text-lg sm:text-3xl lg:text-5xl comfortaa">Trendrent</p>
        <a class="text-xl comfortaa cursor-pointer">Home</a>
        <a class="text-xl comfortaa cursor-pointer">Men</a>
        <a class="text-xl comfortaa display cursor-pointer">Women</a>
      </div>
      <div class="flex absolute items-center p-2 right-8 pt-[12px] lg:gap-24 gap-9 top-4">
          <a class="text-xl comfortaa cursor-pointer">Login</a>
      </div>
      <div class="flex justify-center h-[75vh]">
        <img
          src= {mainimage}
          alt=""
          class="object-cover rounded-b-[50px] min-h-[100%] min-w-[100%]"
        />
      </div>
      <div class="bg-[#D9D9D9] rounded-3xl aspect-[16/3] m-4">
      </div>
      <p class="comfortaa text-2xl text-center my-4">Products</p>
      <div class="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <div class="">
              
          </div>
      </div>
    </>
  )
}

export default App
