import React, { useState } from "react";
import LanguageSelect from "../../component/material-ui/LanguageSelect";
import Footer from "../../component/common/footer/Footer";
import Wrapper from "../../component/common/Wrapper";
import NavigationBar from "../../component/common/NavigationBar";
import { Outlet } from "react-router-dom";
const  HomePage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Wrapper>
    
      <div className=" w-full">
     {/* sale marquee header */}
      <div className="bg-black h-12 text-white flex justify-end items-center w-full ">
        <div className="flex items-center  justify-between w-full md:w-3/4 px-2">
          <p className=" font-poppins text-xs  font-medium ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="px-2 underline cursor-pointer">ShopNow</span>
          </p>
          <LanguageSelect className="" />
        </div>
      </div>
    {/*  navigation */}
        <NavigationBar />
            <main>
             <Outlet />
           </main>
        
        <div className=" w-full flex justify-between items-center p-0 mx-auto   ">
             <Footer /> 
          </div>
      </div>  
    </Wrapper>
  );
};

export default HomePage;
