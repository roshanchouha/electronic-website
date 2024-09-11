import React from 'react'

export const Cards = ({name , image}) => {
  return (
    <div className="w-[150px] h-[130px] flex flex-col justify-center items-center border border-[#7D8184] rounded  gap-2">
               <img src={image || ''} width="50px" height="40px" alt="" />
    <p>{name || 'Categories'}</p>
</div>
  )
}
