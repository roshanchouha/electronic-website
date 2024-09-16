import React from 'react'
import Header from '../common/Heading/Header'
import dogFood from '../../assets/images/product/dogFood.png'
import  { ProductCard }  from '../todaysProductCar/subcomponent/ProductCard'

export const AllProducts = () => {
  return (
    <div className='w-full h-52'>
        <Header title='Our Products' subTitle='Explore Our Products'/>  
         <div className=" grid grid-cols-4 overflow-auto  h-[620px]  ">
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
          </div>
        
    </div>
  )
}
