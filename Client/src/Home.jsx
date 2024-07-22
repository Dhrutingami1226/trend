import React from 'react'
import image from './Constants/image'
import Adv from './Components/Adv'
import Card from './Components/Card'

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[65vh] xl:h-[85vh]">
        <img src={image.mainimage} alt="Main" className="object-cover rounded-b-[30px] h-full w-full shadow-lg" />
      </div>
      <Adv />
      <h1 className='text-center comfortaa text-2xl font-semibold'>Products</h1>
      <div className="m-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5">
        <Card 
            title="Product 1" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="product 1 description"
          />
        <Card 
            title="Product 2" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="product 2 description"
          />
        <Card 
            title="Product 3" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="product 3 description"
          />
      </div>
    </>
  )
}

export default Home