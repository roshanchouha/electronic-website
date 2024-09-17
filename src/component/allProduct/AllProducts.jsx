import React from 'react'
import Header from '../common/Heading/Header'
import dogFood from '../../assets/images/product/dogFood.png'
import  { ProductCard }  from '../todaysProductCar/subcomponent/ProductCard'
import { Button } from '../common/button/Button'

export const AllProducts = () => {
  return (
    <div className='w-full h-52'>
        <Header title='Our Products' subTitle='Explore Our Products'/>  
         <div className=" grid grid-cols-4 overflow-auto  h-[620px]  ">
            <ProductCard image={dogFood} tag='new' />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
            <ProductCard image={dogFood} />
          </div>
          <div className='text-center my-4'>
             <Button name="View All Product" />
          </div>
    </div>
  )
}
