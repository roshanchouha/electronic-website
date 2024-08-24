import React from 'react'
import LanguageSelect from '../../component/material-ui/LanguageSelect'


const HomePage = () => {


  
  return (
    <div className='border-2 border-black  w-screen h-screen '>
         <div className='bg-black text-white flex justify-end '>
                <div className='flex items-center  justify-between w-3/5 '>
                   <p className='text-xs'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>ShopNow</span></p>
                   <LanguageSelect />
                </div>
         </div>
    </div>
  )
}

export default HomePage
