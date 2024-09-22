import React from 'react'

const Timer = ({label, time , separate}) => {
  return (
    <div className='flex gap-2 items-center'>
    <div className='flex flex-col gap-1 md:gap-2'>
       <p className='font-poppins text-[10px] md:text-xs  font-semibold '>{label}</p>
       <h1 className=' font-poppins text-xl md:text-3xl font-bold leading-4'>{time}</h1>
    </div>
    { separate &&  <div className='font-poppins text-xl  md:text-3xl font-bold leading-4 text-[#DB4444] pt-3' > : </div> }
  </div>
  )
}

export default Timer
