import React from 'react'
import Timer from '../../todaysProductCar/subcomponent/Timer'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const Header = ({title , subTitle , showShallTime}) => {
  return (
    <div className="flex flex-col  ">
        <div className="flex items-center">
          <div className=" rounded bg-[#DB4444] p-1.5  h-7"></div>
          <div>
            <h3 className=" font-poppins text-[16px] font-semibold  text-[#DB4444] mx-2">
               {title}
            </h3>
          </div>
        </div>  
        {/* title */}
        <div className=" flex items-center justify-between w-full   h-3/4">
          <div className="flex  items-center ">
            <div className="font-poppins text-xl font-bold place-items-end ">
               {subTitle}
            </div>
            { showShallTime &&  <div className="flex gap-3 ml-12">
              <Timer label="Days" time="03" separate={true} />
              <Timer label="Hours" time="03" separate={true} />
              <Timer label="Minutes" time="03" separate={true} />
              <Timer label="Seconds" time="03" separate={false} />
            </div>}
          </div>

          <div className="flex gap-3">
            <div className=" cursor-pointer rounded-full bg-[#F5F5F5] p-3">
              <MdOutlineKeyboardArrowLeft className="text-xl" />
            </div>
            <div className="cursor-pointer rounded-full bg-[#F5F5F5] p-3">
              <MdOutlineKeyboardArrowLeft className="text-xl rotate-180" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
