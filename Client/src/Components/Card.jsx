import React from 'react';
import icons from '../Constants/icon'

function Card({ title, image, price, rating, subtitle, cardStyle, titleStyle}) {
  return (
    <div className="h-auto sm:h-[24rem] rounded-lg bg-slate-100 hover:bg-slate-200 transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden">
      <img src={image} className='h-[12rem] sm:h-3/4 object-cover'/>
      <div className="h-1/4 p-2">
        <div className="flex justify-between">
          <p className='product-sans text-base sm:text-lg overflow-clip line-clamp-1'>{title}</p>
          <div className="flex items-center gap-1">
            <img src={icons.star} className='size-5'/>
            <p className='product-sans text-base sm:text-lg'>{rating}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-14">
          <span className='product sans line-clamp-1 text-slate-500 text-sm'>{subtitle}</span>
          <span className='text-xl product-sans'>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
