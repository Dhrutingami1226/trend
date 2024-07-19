import React from 'react'

function Adv({image}) {
  return (
    <div className="bg-red-400 h-[20vh] lg:h-[25vh] xl:h-[30vh] m-4 rounded-xl overflow-hidden">
        <img src={image} className='w-full h-full object-cover' />
    </div>
  )
}

export default Adv