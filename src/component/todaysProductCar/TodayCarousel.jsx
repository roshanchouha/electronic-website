import React from "react";
import Timer from "./subcomponent/Timer";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import videGameImg from "../../assets/images/product/videoGame.png";
import { RatingSize } from "../material-ui/LanguageSelect";
import { ProductCard } from "./subcomponent/ProductCard";
import { Button } from "../common/button/Button";
import Header from "../common/Heading/Header";

const TodayCarousel = () => {
  return (
    <div className="w-full ">
      {/* header */}
      <Header title="Today's" subTitle='Flash Sales'  showShallTime={true}/>

       {/* product cards  */}
       <div className="flex flex-col  items-center gap-1 ">
          <div className="  grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 overflow-auto  h-[320px]  w-full ">
            <ProductCard image={videGameImg} />
            <ProductCard image={videGameImg} />
            <ProductCard image={videGameImg} />
            <ProductCard image={videGameImg} />
          </div>
          <div>
            <Button name="View All Product" />
          </div>
        </div>
        <hr className="mt-2" />
    </div>
  );
};

export default TodayCarousel;
