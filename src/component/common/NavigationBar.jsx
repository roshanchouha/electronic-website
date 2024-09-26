import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import likeIcon from "../../assets/icons/like.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import Signup from './Signup/Signup';
import { Link } from 'react-router-dom';
 
const NavigationBar = () => {
    const [searchText, setSearchText] = useState(""); 
  return (
    <div className="w-full h-10 flex  flex-col md:flex-row lg:flex-row justify-between  items-center mt-5  mx-auto gap-2 ">
         {/* logo and menu bar */}
        <div className="flex items-center justify-between  w-full md:w-3/5 ">
          <div>
            <h1 className=" font-poppins text-xm md:text-xl lg:text-2xl font-bold ">Exclusive</h1>
          </div>
          <nav>
            <ul className="flex items-start justify-center  gap-2 md:gap-12 text-sm">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                 <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
         {/* search and like icons */}
        <div className="  flex items-center p-0 gap-6     ">
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
          <Link to="/cart"><BsCart className="text-[15px] md:text-[20px]" /></Link>   
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
  )
}

export default NavigationBar
