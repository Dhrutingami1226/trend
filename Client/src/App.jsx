import { useState } from 'react'
import '../input.css'
import mainimage from '../src/Assets/Images/mainimage.png'

function App() {

  return (
    <>
      <div className="flex items-center h-[100vh]">
        <div className="w-[60vw] max-w-[900px] bg-[#E7E7E7] rounded-r-[50px] p-8 py-[60px]">
            <p className="comfortaa text-5xl text-center mb-8">Login</p>
            <form action="/login" method="post" className="flex flex-col justify-center">
                <input type="email" name="email" placeholder="Enter your Email" className="comfortaa focus:outline-none bg-[#B0A4FF] placeholder-[#6C6C6C] p-4 rounded-xl flex-1 max-h-[45px] mb-6 max-w-[450px] lg:mx-auto xd:min-w-[450px] xd:max-w-[550px] lg:min-w-[550px] text-xl"/>
                <input type="password" name="password" placeholder="Enter your password" className="comfortaa focus:outline-none bg-[#B0A4FF] placeholder-[#6C6C6C] p-4 rounded-xl flex-1 max-h-[45px] mb-6 max-w-[450px] lg:mx-auto xd:min-w-[450px] xd:max-w-[550px] lg:min-w-[550px] text-xl"/>
                <input className="bg-[#D7D0FF] rounded-lg self-center px-6 py-3 text-lg" type="submit" value="Log In"/>
            </form>
        </div>
      </div>
    </>
  )
}

export default App
