import React from 'react'
import { categoryData } from '../../service/dataStorage/data'
import HeroBanner from '../common/carsoul/HeroBanner'
import TodayCarousel from '../todaysProductCar/todayCarousel'
import Heading from '../common/productHead.jsx/Heading'
import { AllProducts } from '../allProduct/AllProducts'
import rightArrow from "../../assets/icons/rightArrow.png"
 


const HomeData = () => {
  return (
    <div>
        {/* category Hero banner  */}
        <div>
          <div className="w-full mx-auto  flex flex-col-reverse  mt-10 lg:mt-0  lg:flex-row md:flex-row  ">
           <div className=" w-full  lg:w-1/5 flex">
                <div className=" flex flex-col items-start p-0 gap-4  mt-5 w-full">
                   <div className="  w-full flex flex-col justify-between gap-4">  
                   {
                     categoryData.map((category, index) => (
                        <div key={index} className=" box-border  w-full flex justify-between items-center p-0 gap-4  px-3   hover:bg-black/[0.05] rounded  cursor-pointer ">
                          <p className="font-poppins text-[14px] font-normal leading-6 text-[#000000] text-center">{category.name}</p>
                          { category.showcategory && <img src={rightArrow} alt="" width="8px" height="11px" />}
                        </div>
                     ))   
                   }
                      {/* <p className="font-poppins text-[14px] font-normal leading-6 text-[#000000] text-center">Woman’s Fashion</p> */}
                   </div>
                </div>
           </div>
            <div className=" flex justify-center font-poppins  w-full   ">
                 <div className=" w-full h-[95%] p-0 md:p-10 m-0 md:ml-8 mt-2 flex items-end">
                    <HeroBanner />
                 </div>
            </div>
          </div>

          {/* today's sale  */}
          <div  className=" w-full   flex justify-between  items-center px-2 md:px-14   mx-auto mt-10 divide-y">
              <TodayCarousel />
          </div>

          {/* categories */}
          <div  className="w-full   flex justify-between  items-center px-2 md:px-14   mx-auto mt-10 divide-y">
              <Heading />
          </div>
          {/* Over Products */}
          <div className=" w-full   flex justify-between  items-center px-2 md:px-14   mx-auto mt-10 divide-y ">
            <AllProducts />
          </div>

          
          </div>
    </div>
  )
}

export default HomeData
