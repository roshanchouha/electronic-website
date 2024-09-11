import React from "react";
import { RatingSize } from "../../material-ui/LanguageSelect";
import { CiHeart } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import videoGameImg from "../../../assets/images/product/videoGame.png"

export const ProductCard = ({image, name , discount ,price }) => {
  return (
    <div className="w-[250px] h-[300px] ">
      <div className="  w-full h-3/5 bg-[#f5f5f5] relative flex justify-center items-center rounded">
        <div className=" absolute top-2 left-1 w-14 h-6 flex justify-center items-center text-white font-thin bg-[#DB4444] font-poppins text-xs p-3 rounded">
          {" "}
          -40%
        </div>
        <div className="flex flex-col  gap-1  w-9 absolute  top-3 right-2">
          <div className="p-1 w-full flex justify-center items-center bg-white rounded-full ">
            <CiHeart className=" " />
          </div>
          <div className="p-1 w-full flex  justify-center items-center bg-white rounded-full">
            {" "}
            <GrView />
          </div>
        </div>
        <div className="w-40">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h3 className="font-semibold">{name || 'HAVIT HV-G92 Gamepad'}</h3>
        <div className="flex gap-3 ">
          <h5 className="text-[#DB4444] text-[14px] font-medium"> { discount || '$120'}</h5>
          <h5 className=" font-poppins text-[#7D8184] text-[14px] line-through font-medium ">
             { price || '$160'}
          </h5>
        </div>
        <div>
          <RatingSize />
        </div>
      </div>
    </div>
  );
};
