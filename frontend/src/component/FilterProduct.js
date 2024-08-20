import React from 'react'
import { PiForkKnife } from "react-icons/pi";
const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick}>
    <div className='text-3xl p-3 bg-yellow-500 rounded-full cursor-pointer'>
    <PiForkKnife />
    </div>
     <p className='text-center font-medium'>{category}</p>
    </div>
  )
}

export default FilterProduct