import React from 'react'
import Timer from './subcomponent/Timer'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import videGameImg from "../../assets/images/product/videoGame.png"
import { RatingSize } from '../material-ui/LanguageSelect';
import { ProductCard } from './subcomponent/ProductCard';
import { Button } from '../common/button/Button';

const TodayCarousel = () => {
  return (
    <div className='w-full h-[483px] '>
     {/* header */}
         <div className='flex flex-col gap-3 '>
            <div className='flex items-center'>
                  <div className=' rounded bg-[#DB4444] p-2  h-10'>
                       
                  </div> 
                  <div>
                     <h3 className=' font-poppins text-[16px] font-semibold  text-[#DB4444] mx-2'>Today's</h3>
                  </div>
            </div>
            {/* title */}
            <div className=' flex items-center justify-between w-full   h-3/4'>
                 <div className='flex  items-center '>
                 <h1 className='font-poppins text-3xl font-semibold place-items-end'>Flash Sales</h1>
                  <div className='flex gap-3 ml-12'>
                 <Timer label='Days' time="03" separate ={true} />
                 <Timer label='Days' time="03" separate ={true}/>
                 <Timer label='Days' time="03" separate ={true}/>
                 <Timer label='Days' time="03" separate ={false} />
                  </div>
                 </div>

                 <div className='flex gap-3'>
                    <div className=' cursor-pointer rounded-full bg-[#F5F5F5] p-3'>
                       <MdOutlineKeyboardArrowLeft className='text-xl' />
                    </div>
                    <div className='cursor-pointer rounded-full bg-[#F5F5F5] p-3'>
                       <MdOutlineKeyboardArrowLeft className='text-xl rotate-180' />
                    </div>
                 </div>

            </div>
             

            {/* product cards  */}
             <div className='flex flex-col  items-center w-full '>
             <div className=' flex flex-col lg:flex-row gap-4 mt-10 overflow-auto h-[300px] sm:h-[400px] '>
                 <ProductCard image={videGameImg} />
                 <ProductCard image={videGameImg} />
                 <ProductCard image={videGameImg} />
                 <ProductCard image={videGameImg} />
            </div>
             <div>
                <Button name='View All Product' />
             </div>
             </div> 
             <hr /> 
         </div>
         
    </div>
  )
}

export default TodayCarousel
