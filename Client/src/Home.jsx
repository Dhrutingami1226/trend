import React from 'react'
import image from './Constants/image'
import Adv from './Components/Adv'
import Footer from './Components/Footer'
import Card from './Components/Card'

function Home() {
  return (
    <>
      <div className="absolute">
        <Topbar />
      </div>
      <div className="flex justify-center items-center h-[65vh] xl:h-[85vh]">
        <img src={image.mainimage} alt="Main" className="object-cover rounded-b-[30px] h-full w-full shadow-lg" />
      </div>
      <Adv />
      <h1 className='text-center comfortaa text-2xl font-semibold'>Products</h1>
      <div className="m-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5">
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
        <Card 
            title="Product 1234564789789" 
            image={image.mainimage} 
            price="$10.00" 
            rating="4.5" 
            subtitle="cotton 122m25522  55665656 54646 585885858588787878 5885555555585555"
            cardStyle="bg-slate-200"
            titleStyle=''
          />
      </div>
      <Footer/>
    </>
  )
}

export default Home