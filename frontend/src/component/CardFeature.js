import React from 'react'

const CardFeature = ({image,price,category,name,loading}) => {
  return (
    <div className='w-full min-w-[200px] bg-white hover:shadow-md drop-shadow-2xl  py-5 px-4 cursor-pointer'>
        {
            image?<><div className='h-20 flex flex-col justify-center items-center '>
            <img src={image} className='h-full'/>
            </div>
            <h3 className='text-slate-600 text-center font-semibold capitalize' >{name}</h3>
             <p className='text-slate-500 text-center capitalize'>{category }</p>
             <p className='text-center font-bold '><span className='text-red-500'>₹</span><span>{price}</span></p>
             <button className='bg-yellow-500  text-black px-12 mt-2 rounded-full font-bold'>Add Cart</button></>
             :
             <div className='min-h-[180px] flex justify-center items-center'>
             <p>{loading}</p>
             </div>
        }
    </div>
   
  )
}

export default CardFeature