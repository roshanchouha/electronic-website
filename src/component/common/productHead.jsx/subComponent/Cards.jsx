import React from 'react'
import { motion } from "framer-motion";

export const Cards = ({name , image}) => {
  return (
    <motion.div
  className="hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] smooth w-[150px] h-[130px] flex flex-col justify-center items-center border border-[#7D8184] rounded gap-2 cursor-pointer"
  whileHover={{ scale: 1.1, rotate: 0 }}
   transition={{ type: "spring", stiffness: 300 }}
>
  {/* <img src={image || ''} width="50px" height="40px" alt="" className='' /> */}
  <div className="text-5xl">{image}</div>
  <p>{name || 'Categories'}</p>
</motion.div>
  )
}
