import React, { useEffect, useState } from 'react'
import FilterProduct from '../component/FilterProduct'
import CardFeature from '../component/CardFeature'


const AllProduct = () =>{
    const productData = useSelector((state) => state.product.productList);
    const categoryList =[...new Set(productData.map(el=>el.category))]
  console.log(categoryList)

  const [filterby,setFilterBy] = useState("")
  const [dataFilter,setDataFilter] = useState([productData])
   useEffect(()=>{
    setDataFilter(productData)
   },[productData])

  const handleFilterFunction=(category)=>{
    const filter=productData.filter(el=>el.category.toLowerCase()===category.toLowerCase())
    setDataFilter(()=>{
      return [
        ...filter
      ]
    })
  }

    return (
        <div className='my-5'>
        <h2 className='font-bold text-2xl text-slate-800'>Your Product</h2>
        <div className='flex gap-5 justify-center overflow-scroll '>
  
          {
            categoryList[0] && categoryList.map(el =>{
              return(
                <FilterProduct category={el} onClick={()=>handleFilterFunction(el)}/>
              )
            })
          }
          
        </div>
        <div className='flex'>
         {
          dataFilter.map(el=>{ 
            return (
              <CardFeature
              key={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
              
              />
            )
                  
          })
         }
        </div>
        </div>
    )
}