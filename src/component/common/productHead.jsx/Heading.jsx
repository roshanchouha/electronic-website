import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import mobileImg from "../../../assets/images/categories/mobile.png";
import computerImg from "../../../assets/images/categories/computer.png";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { PiHeadphonesLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { AiOutlineCamera } from "react-icons/ai";
import { Cards } from "./subComponent/Cards";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Header from "../Heading/Header";
const Heading = () => {
  return (
    <div className="w-full h-auto ">
      {/* header */}
      <Header title="Categories" subTitle='Browse By Category'  showShallTime={false}/>
      
         {/* cards */}
         <div className=" grid grid-cols-2 gap-2 md:grid-cols-6 justify-center place-items-center mt-12">
           <Cards image={<MdOutlinePhoneIphone />} name="Phone" />
           <Cards image={<HiOutlineComputerDesktop />} name="Computer" />
           <Cards image={<BsSmartwatch />} name="Smart Watch" />
           <Cards image={<PiHeadphonesLight />} name="Head Phone" />
           <Cards image={<SiYoutubegaming />} name="Gaming" />
           <Cards image={<AiOutlineCamera />} name="Camera" />
          
        </div>
      
    </div>
  );
};

export default Heading;
