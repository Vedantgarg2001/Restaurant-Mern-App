import React from 'react'

const HomeCard = ({name,image,category,price,loading}) => {
  return (
    <div className='bg-white shadow-md p-2 min-w-[140px]'>
       {name ?
       <>
           <div className='w-40 h-40'>
              <img src={image} className='w-full h-fulls'/>
           
            </div>
          <h3 className='text-slate-600 text-center font-semibold capitalize' >{name}</h3>
          <p className='text-slate-500 text-center capitalize'>{category }</p>
          <p className='text-center font-bold '><span className='text-red-500'>₹</span><span>{price}</span></p>
        </>:
        <div className='flex justify-center items-center h-full'>
        <p>{loading}</p>
        </div>
        } 
    </div>
  )
}

export default HomeCard