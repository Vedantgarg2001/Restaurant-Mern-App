import React, { useEffect, useState } from 'react';
import HomeCard from '../component/HomeCard';
import { useSelector } from 'react-redux';
import CardFeature from '../component/CardFeature';
import FilterProduct from '../component/FilterProduct';


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 6);
  const homeProductCartListVegetables = productData.filter(el => el.category === "vegetable");

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);
  const categoryList =[...new Set(productData.map(el=>el.category))]
  console.log(categoryList)


  const [filterby,setFilterBy] = useState("")
  const [dataFilter,setDataFilter] = useState([])
  useEffect(()=>{
    setDataFilter(()=>{
      
    })
  })
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex py-2'>
        <div className='w-full md:w-1/2'>
          <div className='flex gap-3 bg-slate-400 w-1/4 px-2 items-center rounded-full'>
            <p className='text-xs md:text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" 
              className='w-5 md:w-6' 
              alt='Bike Delivery Icon'
            />
          </div>
          <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold py-4'>
            The Fastest Delivery in <span className='text-red-700'>your home</span>
          </h2>
          <p className='py-3 text-sm md:text-base'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>
            Order Now
          </button>
        </div>
        <div className='w-full md:w-1/2 flex flex-wrap gap-4 p-4 justify-center'>
          {productData.length > 0 ? homeProductCartList.map((el, index) => (
            <HomeCard
              key={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          )) : loadingArray.map((_, index) => (
            <HomeCard
              key={index}
              loading={"Loading...."}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className='font-bold text-2xl text-slate-800'>Fresh Vegetables</h2>
      </div>
      <div className='flex gap-5 mt-4 overflow-scroll scrollbar-hidden'>
        {productData.length > 0 ? homeProductCartListVegetables.map(el => (
          <CardFeature
            key={el._id}
            image={el.image}
            name={el.name}
            category={el.category}
            price={el.price}
          />
        )) : loadingArrayFeature.map((el, index) => (
          <CardFeature
            key={index}
            loading={"Loading...."}
          />
        ))}
      </div>
      <div className='my-5'>
      <h2 className='font-bold text-2xl text-slate-800'>Your Product</h2>
      <div className='flex gap-5 justify-center overflow-scroll '>

        {
          categoryList[0] && categoryList.map(el =>{
            return(
              <FilterProduct category={el}/>
            )
          })
        }
        
      </div>
      <div className=''>
       
      </div>
      </div>
    </div>
  );
}

export default Home;
