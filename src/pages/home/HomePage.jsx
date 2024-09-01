import React, { useState } from "react";
import LanguageSelect from "../../component/material-ui/LanguageSelect";
import { IoSearchOutline } from "react-icons/io5";
import likeIcon from "../../assets/icons/like.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { categoryData } from "../../service/dataStorage/data";
import rightArrow from "../../assets/icons/rightArrow.png"
import HeroBanner from "../../component/common/carsoul/HeroBanner";
import TodayCarousel from "../../component/todaysProductCar/todayCarousel";
const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bo  w-screen h-screen ">

     {/* sale marquee header */}
      <div className="bg-black h-12 text-white flex justify-end items-center ">
        <div className="flex items-center  justify-between w-3/5 ">
          <p className=" font-poppins text-xs  ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="px-2 underline cursor-pointer">ShopNow</span>
          </p>
          <LanguageSelect className=" " />
        </div>
      </div>

       {/* navigation */}
      <div className="   w-4/5 h-10 flex justify-between  items-center p-0 gap-148px mx-auto mt-5">
         {/* logo and menu bar */}
        <div className="flex items-center p-0 gap-48     ">
          <div>
            <h1 className=" font-poppins text-2xl font-bold ">Exclusive</h1>
          </div>
          <nav>
            <ul className="flex items-start justify-center gap-12 text-sm">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
         {/* search and like icons */}
        <div className="  flex justify-around items-center p-0 gap-6  ">
          <div className="flex  justify-center items-center gap-10 py-2 pe-3 ps-6 rounded bg-[#f5f5f5]">
            <div className="flex  justify-center items-center p-0 gap-8">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-[#f5f5f5] searchBar outline-none focus:border-none font-poppins text-[12px] font-[400] leading-[18px] text-[#000000] opacity-50"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <div>
                <IoSearchOutline />
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center">

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer  relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
                     text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] "
            >
              15
            </div>
          </div>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer  relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
                     text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] "
            >
              5
            </div>
          </div>
           </div>
        </div>
      </div>
    
 
        {/* category Hero banner  */}
       <div className=" lg:w-4/5 h-96 mx-auto  flex  ">
           <div className="   w-1/5  flex  ">
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
            <div className=" font-poppins  w-full  ">
                 <div className=" w-auto ml-6 h-[95%] mt-2 flex items-end">
                    <HeroBanner />
                 </div>
            </div>
       </div>



          {/* today's sale  */}
          <div  className=" border border-black w-4/5 h- flex justify-between  items-center p-0 gap-148px mx-auto mt-5">
              <TodayCarousel />
   
          </div>
    </div>
  );
};

export default HomePage;
