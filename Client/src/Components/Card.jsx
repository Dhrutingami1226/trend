// import React from 'react'

// function Card({Title,Cardstyle,Titlestyle,Price,Rating,MRP,Image}) {
//   return (
//     <div className='' style={{Cardstyle}}>
        
//     </div>
//   )
// }

// export default Card
import React from 'react';

function Card({ title, image, price, rating, subtitle, cardStyle, titleStyle}) {
  return (
    <div className={`relative pb-[133%]`}>
      <div className="absolute w-full h-full top-0">
        <img src={image} className='h-[70%] object-cover rounded-t-xl'/>
        <div className={`${cardStyle} h-[30%] w-full rounded-b-xl`}>
          <div className="p-2">
            <div className="flex justify-between">
              <p className='product-sans text-xl lg:text-2xl line-clamp-1'>{title}</p>
              <div className="">
                <p className='product-sans text-xl lg:text-2xl'>{rating}</p>
              </div>
            </div>
            <p className='product-sans line-clamp-1 text-sm text-slate-600'>{subtitle}</p>
            <p className="product-sans text-2xl lg:text-3xl mt-3">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
