import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import mobileImg from "../../../assets/images/categories/mobile.png";
import computerImg from "../../../assets/images/categories/computer.png";

import { Cards } from "./subComponent/Cards";

const Heading = () => {
  return (
    <div className="w-full h-[483px] ">
      {/* header */}
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center">
          <div className=" rounded bg-[#DB4444] p-2  h-10"></div>
          <div>
            <h3 className=" font-poppins text-[16px] font-semibold  text-[#DB4444] mx-2">
              Categories
            </h3>
          </div>
        </div>
        {/* title */}
        <div className=" flex items-center justify-between w-full   h-3/4">
          <div className="flex  items-center ">
            <h1 className="font-poppins text-3xl font-semibold place-items-end">
              Browse By Category{" "}
            </h1>
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

        {/* cards */}
        <div className="flex flex-col lg:flex-row  justify-between mt-12">
           <Cards image={mobileImg} name="Phone" />
           <Cards image={computerImg} name="Computer" />
           <Cards image={mobileImg} name="Phone" />
           <Cards image={mobileImg} name="Phone" />
           <Cards image={computerImg} name="Computer" />
           <Cards image={mobileImg} name="Phone" />
           


        </div>
      </div>
    </div>
  );
};

export default Heading;
