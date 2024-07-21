// import React from 'react'

// function Topbar() {
//   return (
//     <div className="bg-transparent flex justify-between items-center mt-2 px-4">
//   <div className="flex items-center h-12 space-x-4 md:space-x-12">
//     <p className='comfortaa text-2xl sm:text-4xl'>Trendrent.</p>
//     <div className="hidden md:flex space-x-4 md:space-x-12">
//       <p className='comfortaa text-lg sm:text-xl'>Home</p>
//       <p className='comfortaa text-lg sm:text-xl'>Men</p>
//       <p className='comfortaa text-lg sm:text-xl'>Women</p>
//     </div>
//   </div>
//   <div className="flex items-center h-12">
//     <p className='comfortaa text-lg sm:text-xl'>Login</p>
//   </div>
// </div>

//   )
// }

// export default Topbar
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link, NavLink} from 'react-router-dom'

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent flex justify-between items-center mt-2 px-4 w-[98vw] my-2">
      <div className="flex items-center h-12 space-x-4 md:space-x-12">
        <Link to='/' className='comfortaa text-2xl sm:text-4xl cursor-pointer'>
          Trendrent.
        </Link>
        <div className="hidden md:flex space-x-4 md:space-x-12">
          <Link className="comfortaa text-lg sm:text-xl cursor-pointer">Home</Link>
          <Link className="comfortaa text-lg sm:text-xl cursor-pointer">Men</Link>
          <Link className="comfortaa text-lg sm:text-xl cursor-pointer">Women</Link>
          <Link className="comfortaa text-lg sm:text-xl cursor-pointer">Kid</Link>
        </div>
      </div>
      <div className="flex items-center h-12 space-x-4">
        <div className="hidden md:flex">
          <Link className="comfortaa text-lg sm:text-xl cursor-pointer">Login</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-75 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed top-0 right-0 w-64 h-full bg-slate-100 shadow-lg p-4 z-50">
          <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Link className="comfortaa text-lg mb-4 cursor-pointer">Home</Link>
          <Link className="comfortaa text-lg mb-4 cursor-pointer">Men</Link>
          <Link className="comfortaa text-lg mb-4 cursor-pointer">Women</Link>
          <Link className="comfortaa text-lg mb-4 cursor-pointer">Kid</Link>
          <Link className="comfortaa text-lg mb-4 cursor-pointer">Login</Link>
        </div>
      </Transition>
    </div>
  );
};

export default Topbar;


