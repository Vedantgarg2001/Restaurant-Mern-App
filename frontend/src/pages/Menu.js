import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const {filterby}=useParams()
  
   const productData = useSelector(state=>state.product.productList)   
   const productDisplay= productData.filter(el=>el._id===filterby)
  return (
   
    <div>

      <div className='w-full max-w-2xl bg-slate-500'>

      </div>
    </div>
  )
}

export default Menu